// Função verificarEstoque()
function verificarEstoque(nomeItem, quantidadeDisponivel, quantidadeSolicitada) {
    
    // Verifica se são números válidos
    if (isNaN(quantidadeDisponivel) || isNaN(quantidadeSolicitada)) {
        return "Erro: Quantidades devem ser numeros inteiros.";
    }

    // Verifica disponibilidade
    if (quantidadeSolicitada > quantidadeDisponivel) {
        return "Estoque insuficiente";
    } else {
        return "Pedido realizado";
    }
}

// Lendo as entradas do usuário
let nomeItem = gets();                       // string
let quantidadeDisponivel = parseInt(gets()); // inteiro
let quantidadeSolicitada = parseInt(gets()); // inteiro

// Chamando a função e imprimindo o resultado
console.log(verificarEstoque(nomeItem, quantidadeDisponivel, quantidadeSolicitada));

/* Todas as entradas e saída dos algoritmos são utilizados o STDIN e STDOUT de cada linguagem, abaixo tem algumas dicas de como utilizar cada STDIN e STDOUT de cada linguagem.
JavaScript

Em JavaScript as funções de STDIN e STDOUT respectivamente são gets e console.log, a função gets é implementada internamente para auxiliar a entrada dos dados.

Exemplo:
let line = gets(); // Lê a linha de entrada
console.log(line); // Imprime o dado

Java

Em Java existe várias formas de implementar o STDIN e STDOUT recomendamos utilizar BufferedReader para o STDIN e o System.out.println para o STDOUT.

Exemplo:
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
StringTokenizer st = new StringTokenizer(br.readLine()); // Lê a linha de entrada
int a = Integer.parseInt(st.nextToken());
System.out.println(a); // Imprime o dado

Python

Em Python existe várias formas de implementar o STDIN e STDOUT recomendamos utilizar sys.stdin.readline para o STDIN e o print para o STDOUT.

Exemplo:
import sys
a = int(sys.stdin.readline()) // Lê a linha de entrada
print(a); // Imprime o dado

Descrição
O Mestre dos Magos tem uma loja de itens mágicos e precisa de um sistema para verificar o estoque antes de vender um item.  O programa deve receber o nome do item, a quantidade disponível no estoque e a quantidade solicitada pelo cliente.

🛠️ Requisitos Técnicos
✅ Criar uma função chamada verificarEstoque() que recebe três parâmetros:

nomeItem (string)
quantidadeDisponivel (inteiro)
quantidadeSolicitada (inteiro)
A função deve retornar uma string com a mensagem correspondente.
✅ O programa deve garantir que os valores informados para quantidade sejam números inteiros válidos. Caso contrário, deve exibir "Erro: Quantidades devem ser numeros inteiros."

Entrada
O programa recebe três entradas:

Nome do item (string) → Nome do item mágico que o cliente deseja comprar.
Quantidade disponível (inteiro) → Número de unidades disponíveis no estoque.
Quantidade solicitada (inteiro) → Número de unidades que o cliente deseja comprar.
💡 Observação:

Caso o usuário forneça um valor inválido para a quantidade (exemplo: uma palavra ao invés de um número), o programa deve exibir uma mensagem de erro.
Saída
Após processar os dados, o programa deve imprimir uma única mensagem, que pode ser:

"Pedido realizado" → Se houver estoque suficiente.
"Estoque insuficiente" → Se não houver estoque suficiente.
"Erro: Quantidades devem ser numeros inteiros." → Se o usuário inserir valores inválidos para as quantidades.
Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada	Saída
Pocao de Cura
10
5

Pedido realizado
Bola de Cristal
3
5

Estoque insuficiente
Varinha Magica
sete
3

Erro: Quantidades devem ser numeros inteiros

Atenção: É extremamente importante que as entradas e saídas sejam exatamente iguais às descritas na descrição do desafio de código.

Os desafios apresentados aqui têm como objetivo principal exercitar os conceitos aprendidos e proporcionar um primeiro contato com lógica de programação. Caso não tenha experiência em programação, utilize o template disponível e preencha com os conceitos aprendidos. Para resetar o template, basta clicar em “Restart Code”.*/