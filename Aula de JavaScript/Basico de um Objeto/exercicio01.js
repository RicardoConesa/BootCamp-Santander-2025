class Carro{
    marca;
    cor;
    gastomedio;

    constructor (marca,cor,gastomedio){
        this.marca = marca;
        this.cor = cor;
        this.gastomedio = gastomedio;
    }
}
//Carros Declarados
const carro1 = new Carro("Ford", "Branco", 10);
const carro2 = new Carro("Renault", "Cinza", 12);
const carro3 = new Carro("BMW", "Preto", 8);
const carro4 = new Carro("Fiat", "Vermelho", 14);

console.log(carro1,carro2,carro3,carro4);


function precoViagem(kmviagem,precocombustivel,carro){
   const litros = (kmviagem/carro.gastomedio);
   const total = (litros*precocombustivel);

    console.log(`O ${carro.marca} gastou ${litros.toFixed(2)} litros e ficou um total de R$ ${total.toFixed(2)}` )
}

precoViagem(350, 4.70, carro1);
precoViagem(350, 4.70, carro2);
precoViagem(350, 4.70, carro3);
precoViagem(350, 4.70, carro4);