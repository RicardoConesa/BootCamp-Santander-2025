class Pessoa {
    nome;
    altura;
    peso;

    constructor(nome,altura,peso){
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }

}

const ricardo = new Pessoa("Ricardo", 1.97, 115)

console.log(ricardo)

function calculoimc(p1){
   const imc = p1.peso / (Math.pow(p1.altura,2 ));

    console.log(`Seu IMC é de ${imc.toFixed(2)}`)
}


calculoimc(ricardo);