
//Orientação a Prototipo
const pessoa ={
    
    genero: 'M'
}

const ricardo = {
    idade: 30,
    nome: 'Ricardo',
    __proto__: pessoa //busca na pessoa o genero   o OBJETO ESTA SE BASEANDO EM PESSOA assim procurando o valor em PESSOA
}

console.log(ricardo)
console.log(ricardo.genero)