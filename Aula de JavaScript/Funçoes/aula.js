//função simples
function teste() {
    console.log("teste log")
}
teste()
teste()

//função exibição do nome digitado
function SaveName(name) {
    console.log(" Seu nome é "+ name)
}
SaveName()
SaveName("Ricardo")
SaveName("Teste Nome")

//Função de calculo de numero ao quadrado
function quadrado(valor){
    return valor * valor;
} 

const multvalor = quadrado(10);
console.log(multvalor)

//função que incrementa Juros

function calculaJuros(total, juros){
    const valorDeAcrecimo = (juros / 100)* total;
    return total + juros;
}

console.log(calculaJuros(100, 15));