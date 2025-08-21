
// classe é uma definição do que deveria ser.
class Pessoa {
    nome;
    idade;

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

const ricardo = new Pessoa();

//aqui não definimos as caracteristicas - somente que Ricarso vai receber a classe pessoa
console.log(ricardo);
//Objeto é uma estancia da classe 

ricardo.nome = "Ricardo Conesa Silva";
ricardo.idade = 32;

console.log(ricardo);

const geovana = new Pessoa();

geovana.nome = "Geovana Ferraz";
geovana.idade = 28;

console.log(geovana);

ricardo.descrever();
ricardo.descrever();
geovana.descrever();