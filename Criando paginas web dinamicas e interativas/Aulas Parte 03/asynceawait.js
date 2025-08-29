const fs = require('fs');
const path = require('path');
const filepath = path.resolve(__dirname, 'tarefas.csv');


async function buscarArquivo(){
const arquivo = await fs.promises.readFile(filepath)
const textodoarquivo=arquivo.toString('utf8')
console.log(textodoarquivo)
}

buscarArquivo()