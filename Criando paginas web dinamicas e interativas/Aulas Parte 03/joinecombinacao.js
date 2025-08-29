
// Join é um Juntar

const lista = [1, 2, 3]
console.log(lista.join(' & '))


junta = lista.join(' ! ')
console.log(junta)

// Array de objetos, cada um representando um produto.
const produtos = [
  { nome: 'Celular', preco: 1200, estoque: 5 },
  { nome: 'Notebook', preco: 2500, estoque: 0 }, // Fora de estoque
  { nome: 'Fone', preco: 150, estoque: 10 },
  { nome: 'Mouse', preco: 50, estoque: 12 },
  { nome: 'Teclado', preco: 300, estoque: 0 }, // Fora de estoque
];

// O .filter() seleciona apenas os produtos com estoque > 0.
// O .map() extrai o preço de cada produto selecionado.
// O .reduce() soma todos os preços.
const valorTotalEmEstoque = produtos
  .filter(produto => produto.estoque > 0)
  .map(produto => produto.preco * produto.estoque)
  .reduce((total, valor) => total + valor, 0);

console.log(`O valor total dos produtos em estoque é: R$${valorTotalEmEstoque}`);

// Saída: O valor total dos produtos em estoque é: R$7200

const usuarios = [
  'ana maria',
  'joao silva',
  'pedro alves',
  'mariana souza',
];

// O .map() transforma cada nome em letras maiúsculas.
// O .join() une todos os nomes com uma vírgula e um espaço.
const nomesFormatados = usuarios
  .map(nome => nome.toUpperCase())
  .join(', ');

console.log(nomesFormatados);

// Saída: ANA MARIA, JOAO SILVA, PEDRO ALVES, MARIANA SOUZA

const alunos = [
  { nome: 'Luiza', nota: 8.5 },
  { nome: 'Marcos', nota: 6.0 },
  { nome: 'Sofia', nota: 9.0 },
  { nome: 'Carlos', nota: 7.5 },
  { nome: 'Beatriz', nota: 5.0 }
];

// O .filter() seleciona apenas os alunos com nota maior que 7.
// O .map() extrai o nome de cada aluno selecionado.
const melhoresAlunos = alunos
  .filter(aluno => aluno.nota > 7)
  .map(aluno => aluno.nome);

console.log('Os melhores alunos são:');
console.log(melhoresAlunos);

// Saída: Os melhores alunos são:
//         [ 'Luiza', 'Sofia', 'Carlos' ]