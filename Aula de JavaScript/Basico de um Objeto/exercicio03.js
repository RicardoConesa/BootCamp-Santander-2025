class Pessoa {
    nome;
    altura;
    peso;

    constructor(nome, altura, peso) {
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }

    // Método para calcular o IMC
    calculoImc() {
        const imc = this.peso / Math.pow(this.altura, 2);
        console.log("seu IMC "+ imc.toFixed(2));
        return imc;
        
    }

    // Método para classificar o IMC
    classificaImc() {
        const imc = this.calculoImc();

        if (imc < 18.5) {
            return `${this.nome}, seu IMC é ${imc.toFixed(2)} (Abaixo do peso)`;
        } else if (imc >= 18.5 && imc < 25) {
            return `${this.nome}, seu IMC é ${imc.toFixed(2)} (Peso normal)`;
        } else if (imc >= 25 && imc < 30) {
            return `${this.nome}, seu IMC é ${imc.toFixed(2)} (Sobrepeso)`;
        } else if (imc >= 30 && imc < 40) {
            return `${this.nome}, seu IMC é ${imc.toFixed(2)} (Obesidade)`;
        } else {
            return `${this.nome}, seu IMC é ${imc.toFixed(2)} (Obesidade grave)`;
        }
    }
}

const ricardo = new Pessoa("Ricardo", 1.97, 115);

console.log(ricardo);
console.log(ricardo.calculoImc);
console.log(ricardo.classificaImc());