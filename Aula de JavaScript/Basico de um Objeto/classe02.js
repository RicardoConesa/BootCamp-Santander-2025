class Pessoa {
    nome;
    idade;

    //definiremos um constructor para que alguns dados sejam obrigatorio ao criar uma pessoa

    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

//criando o objeto com a classe diretamente 
const ricardo = new Pessoa("Ricardo Conesa", 32);

//aqui não definimos as caracteristicas - somente que Ricarso vai receber a classe pessoa
console.log(ricardo);
//Objeto é uma estancia da classe 

const geovana = new Pessoa("Geovana", 28);
const giorgia = new Pessoa("Giorgia", 20);
const raul = new Pessoa("Raul", 40);


console.log(geovana);
console.log(giorgia);
console.log(raul);

geovana.descrever();
giorgia.descrever();
raul.descrever();