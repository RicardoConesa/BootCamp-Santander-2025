//io promisses
// forma universal de lidar com asyncornismo
new Promise((resolve,reject) =>{
    resolve()
    reject()

})

const promessadenumero = new  Promise((resolve, reject)=>{
    setTimeout(()=>{
    const numero= parseInt(Math.random()*100)
    resolve(numero)},1500)
})
console.log('Calculando')
promessadenumero
    .then((value)=>{
        console.log(value)
        return value+10
    })
    //posso adicionar varios then
    .then((value)=>{
        console.log(value)
    })
    .catch((erro)=>{
        console.log(erro)
    })
    .finally(()=>{
        console.log("finalizou")
    })