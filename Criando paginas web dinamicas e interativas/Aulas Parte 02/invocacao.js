
function falarMeuNome(){
    console.log('Meu Nome é Ricardo')
}
// chamando a função normalmente
falarMeuNome()

const pessoa = {
    nome: "Ricardo",
    idade: 32,
    cidade: "Avaré"
}

//com aply conseguimos colocar a função no contexto do objeto

function gritar(prefixo){
    console.log(prefixo, this.nome)
}
gritar.apply(pessoa,['Olaaaaaa'])

gritar.call(pessoa, 'Meu amigo')