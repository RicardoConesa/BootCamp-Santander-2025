const fs = require('fs');
const path = require('path');
const filepath = path.resolve(__dirname, 'tarefas.csv');

// O "leituraarquivo" é uma promessa que representa a leitura do arquivo.
const leituraarquivo = fs.promises.readFile(filepath, { encoding: 'utf-8' });

leituraarquivo
    // O ".then()" recebe o conteúdo do arquivo.
    .then((textoDoArquivo) => {
        // CORREÇÃO 1: Use '\n' para quebra de linha.
        // CORREÇÃO 2: Retorne o resultado para que o próximo '.then()' possa usá-lo.
        return textoDoArquivo.split('\n');
    })
    // O próximo ".then()" recebe o array de linhas.
    .then((linhas) => {
        // CORREÇÃO 3: Remova a primeira linha (cabeçalho) com o método .slice(1).
        // Isso evita que o cabeçalho seja processado.
        const linhasSemCabecalho = linhas.slice(1);

        // CORREÇÃO 4: Retorne o resultado da operação .map() para que ele possa ser usado
        // posteriormente, caso você queira fazer algo com o array de objetos.
        return linhasSemCabecalho.map((linha) => {
            const [nome, feito] = linha.split(';');
            return {
                nome: nome,
                feito: feito.trim() === 'true' // Remove espaços extras e converte para boolean
            };
        });
    })
    .then((tarefas) => {
        // AQUI, você pode trabalhar com o array de objetos.
        // Por exemplo, você pode imprimir o resultado final:
        console.log(tarefas);
    })
    .catch((erro) => {
        // Este bloco captura qualquer erro em qualquer uma das promessas.
        console.error('Erro na leitura ou processamento do arquivo:', erro);
    });