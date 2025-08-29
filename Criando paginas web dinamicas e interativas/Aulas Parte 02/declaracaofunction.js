//expression
function funcao1()  {    
    console.log(this)
}

//arrow function ----> nela não funciona o this por acabar isolado o contexto
const funcao2 = () => {            }
    console.log(this)


//objeto ricardo
const ricardo = {
    nome: 'Ricardo',
    funcao1,
    funcao2
}

ricardo.funcao1()
ricardo.funcao2()