
class Pessoa {
    constructor(nome, idade, sexo, cidade, profissao) {
        this.nome = nome
        this.idade = idade
        this.sexo = sexo
        this.cidade = cidade
        this.profissao = profissao
    }
    
    falar() {
        console.log(`Olá, meu nome é ${this.nome}.`)
    }

    apresentar() {
        console.log(`Tenho ${this.idade} anos, moro em ${this.cidade} e sou ${this.profissao}.`)
    }
}

const ricardo = new Pessoa('Ricardo', 32, 'M', 'Avaré', 'Desenvolvedor')

// Adicionando um novo método para imprimir todos os dados
console.log('--- Informações de Ricardo ---');
console.log(`Nome: ${ricardo.nome}`);
console.log(`Idade: ${ricardo.idade}`);
console.log(`Sexo: ${ricardo.sexo}`);
console.log(`Cidade: ${ricardo.cidade}`);
console.log(`Profissão: ${ricardo.profissao}`);

console.log('--- Interações ---');
ricardo.falar();
ricardo.apresentar();