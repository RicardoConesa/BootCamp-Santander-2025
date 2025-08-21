const vitor = {
    nome: "Ricardo Conesa Silva",
    idade: 32,

   detalhes: function(){
       console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }

};

console.log(vitor.nome);
console.log(vitor.idade);
console.log(vitor);

vitor['nome'] = 'Seu Nome';

console.log(vitor.nome);

vitor.nome = 'Chaves';

console.log(vitor.nome);