class Pessoa{
    nome;
    idade;
    sexo;

    constructor(nome,idade,sexo){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
}

const ricardo = new Pessoa("Ricardo", 33, "M");
const geovana = new Pessoa("Geovana", 28, "F");
const giorgia = new Pessoa("Giorgia", 20, "F");
const jone = new Pessoa("Jone", 20, "M");
console.log(ricardo);
console.log(geovana);
console.log(giorgia);

function comparaidade(pessoa1,pessoa2){
    if (pessoa1.idade > pessoa2.idade){
        console.log(`${pessoa1.nome} é mais velho(a) que ${pessoa2.nome}` )
    } 
    else if (pessoa1.idade < pessoa2.idade){
        console.log(`${pessoa2.nome} é mais velho(a) que ${pessoa1.nome}` )
    }
    else
        console.log(`${pessoa1.nome} tem a mesma idade que ${pessoa2.nome}` )
}

comparaidade(ricardo, geovana);

comparaidade(giorgia, geovana);

comparaidade(jone,giorgia);
