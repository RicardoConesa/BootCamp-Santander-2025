const produtos = [
  { nome: 'Celular', preco: 1200, estoque: 5 },
  { nome: 'Notebook', preco: 2500, estoque: 0 },
  { nome: 'Fone', preco: 150, estoque: 10 },
  { nome: 'Mouse', preco: 50, estoque: 12 },
  { nome: 'Teclado', preco: 300, estoque: 0 },
];

const valorTotalEmEstoque = produtos
  // O ".filter()" cria um NOVO array com os itens que passam no teste.
  // Ele vai pegar apenas os objetos onde "produto.estoque" é maior que 0.
  // O resultado é um array com 3 produtos: Celular, Fone e Mouse.
  .filter(produto => produto.estoque > 0)
  
  // O ".map()" é chamado no resultado do ".filter()". Ele cria um NOVO array
  // transformando cada objeto do array filtrado no valor total (preco * estoque).
  // O resultado é um array de números: [6000, 1500, 600].
  .map(produto => produto.preco * produto.estoque)
  
  // O ".reduce()" é chamado no resultado do ".map()". Ele reduz o array a um único valor.
  // Ele soma todos os números do array [6000, 1500, 600] para obter um total.
  // O resultado final é o número 8100.
  .reduce((total, valor) => total + valor, 0);

console.log(`O valor total dos produtos em estoque é: R$${valorTotalEmEstoque}`);
// Saída: O valor total dos produtos em estoque é: R$8100

const usuarios = [
  'ana maria',
  'joao silva',
  'pedro alves',
  'mariana souza',
];

const nomesFormatados = usuarios
  // O ".map()" cria um NOVO array. Para cada nome, ele o transforma em letras maiúsculas.
  // O resultado é um novo array de strings: ['ANA MARIA', 'JOAO SILVA', 'PEDRO ALVES', 'MARIANA SOUZA'].
  .map(nome => nome.toUpperCase())
  
  // O ".join()" é chamado no resultado do ".map()". Ele une os elementos do array em UMA ÚNICA string.
  // Ele usa a vírgula e o espaço ", " como separador.
  // O resultado final é a string: "ANA MARIA, JOAO SILVA, PEDRO ALVES, MARIANA SOUZA".
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

const melhoresAlunos = alunos
  // O ".filter()" cria um NOVO array. Ele vai pegar apenas os objetos onde "aluno.nota" é maior que 7.
  // O resultado é um array com 3 objetos: Luiza, Sofia e Carlos.
  .filter(aluno => aluno.nota > 7)
  
  // O ".map()" é chamado no resultado do ".filter()". Ele cria um NOVO array.
  // Para cada objeto de aluno selecionado, ele extrai apenas o valor da propriedade "nome".
  // O resultado é um array de strings: ['Luiza', 'Sofia', 'Carlos'].
  .map(aluno => aluno.nome);
  
  // Neste caso, não usamos o ".join()" porque o resultado desejado é um array.

console.log('Os melhores alunos são:');
console.log(melhoresAlunos);
// Saída: [ 'Luiza', 'Sofia', 'Carlos' ]