
const lista = [1,2,3,4,5,6,7,8,9,10]
//percorrer a lista orientada a funçoes

lista.forEach((value, i, listref) => {
    console.log(value, i, listref )
    
})


lista.forEach((value, i, listref) => {
    console.log(value + i)
    
})

console.log('quebra de comando')
//o mesmo metodo usando for
const cb = (value, i, listref) =>{
    console.log(value + i)
}
lista.forEach(cb)


console.log('usando o for')
for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    cb(element, i, lista)
    
}
//metodo mais simples
console.log('percorrer a lista')
lista.forEach((value)=>{
    console.log(value)
})