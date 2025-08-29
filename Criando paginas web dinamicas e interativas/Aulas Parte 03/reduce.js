
const lista = [1,2,3,4,5,6,7,8,9,10]

//vai somar nossa lista tambem pode ser usado para outras funcoes aritimeticas e outros casos
//a função do reduce e transformar nossa lista em um unico elemento
const somadosnumeros =lista.reduce((previous, current)=>{
    return previous + current
})
console.log(somadosnumeros)