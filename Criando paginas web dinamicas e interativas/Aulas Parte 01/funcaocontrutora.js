
function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

//adicionando dentro do objeto construtor um prototipo 

Pessoa.prototype.falar = function(){
    console.log(`Meu nome é ${this.nome}`)
}

const renan = new Pessoa('Ricardo', 30)

console.log(renan)

//chamando o function 
renan.falar()

//criando o mesmo codigo com class

class Humano {
    constructor(nome, idade, sexo) {
        this.nome = nome
        this.idade = idade
        this.sexo = sexo
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }

}
//Criando e chamando HUMANO com sua função já declarada

const ricardo = new Humano('Ricardo', 32, 'M')
console.log(ricardo)

ricardo.falar()