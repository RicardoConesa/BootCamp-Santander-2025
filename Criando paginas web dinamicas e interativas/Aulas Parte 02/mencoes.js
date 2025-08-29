

function adicao(x,y){
    return x + y
}

function multiplica(x,y){
    return x * y
}

function calculadora(x, operação, y){
  console.log(operação(x,y))

}

calculadora(10, adicao, 10)
calculadora(10, multiplica, 10)