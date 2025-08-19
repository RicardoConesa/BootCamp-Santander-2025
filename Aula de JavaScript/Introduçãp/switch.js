let fruta = "morango"
//checa a condição sem usar if else


switch(fruta){
    case "laranja":
        console.log("Suco de laranja")
        break

    //podemos usar a mesma checagem para exibir a mesma mensagem
    //adicionando mais case    
    case "banana":
    case "morango":
    case "mamão":        
        console.log("vitamina")
        break    
    
    default:
        console.log("Suco Generico")
}