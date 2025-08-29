//OBJETOS E METODOS
//coleção dinamica de chave e valor.

//como é feita a declaracao de um objeto

const x = {};
console.log(typeof x)
//aqui declaramos um objeto
console.log(typeof x)

// Objeto com seus campos definidos

const y = {
    nome: "Renan",
    idade: 36,
    cidade: "Avaré",
    
};

y.sobrenome = "Conesa";

console.log(y)
console.log(y.nome + " "+ y.idade)

//declaracao fora do objeto fica da seguinte maneira
y.pais = "BRASIL"
console.log(y)
//outra maneira de chamar o objeto
console.log(y["nome"],y["idade"])

//chamando variaveis do objeto para alteração
y.nome = "Ricardo";
y.idade = 32;

console.log(y);

// VARIAVEIS PODEM RECEBER FUNÇÂO
const ab = {

}
ab.calculo = function(){
    
    console.log("teste")
    
    
}
ab.calculo()
