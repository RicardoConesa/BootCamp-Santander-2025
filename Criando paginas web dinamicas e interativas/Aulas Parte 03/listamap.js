const lista = [1,2,3,4,5,6,7,8,9,10]
//percorrer a lista orientada a funçoes

//filter a constante recebe a função que retorna um valor esperado na regra colocada
const listadiv = lista.filter((element) =>{
   // return element
   return (element % 2 === 0)
})

console.log(listadiv)

//////////////////////////////////////////////////////////////////////////////////////////////////////////

class Pessoa {
    constructor(nome){
        this.nome = nome
    }
}
const humanos = [new Pessoa('Ricardo'), new Pessoa('Geovana'), new Pessoa('Raul'), new Pessoa('Giorgia'), new Pessoa('Aurora')]
console.log(humanos)

//convertendo o elemento no nome dele
const mapeia = humanos.map((element) =>{
    return element.nome
})
console.log(mapeia)

//pode ser reduzida sem usar o return
const mapa = humanos.map((element) => element.nome)
console.log(mapa)

//convertendo a lista em HTML
const emHTML = humanos.map((element) => {
    return `
             <li> ${element.nome}</li>
           `
})
console.log(emHTML)