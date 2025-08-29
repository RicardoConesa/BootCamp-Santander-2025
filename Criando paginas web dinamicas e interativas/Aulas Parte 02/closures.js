
// closures é uma declaração que se lembra onde foi declarada

function soma(x){
    return function(y) {
        return x+y
    }
}

console.log(soma(5)(15))

//complementando podemos fazer ela parcialmente pronta

const valor = soma(20)
//deixado declarado o valor do X da função soma criado
//recebendo somente o segundo valor declarado a baixo
console.log(valor(15))
console.log(valor(100))
console.log(valor(200))