let valores = gets().split("");  
let forca = parseInt(valores[0]); 
let inteligencia = parseInt(valores[1]); 

let classificacao = "";

// TODO: Crie condições if/else para validação da classificação do personagem:

if (forca < 20 && inteligencia < 15) {
  console.log("Aprendiz");
} else if (forca >= 20 && inteligencia < 15) {
  console.log("Guerreiro");
} else if (inteligencia >= 15 && forca < 20) {
  console.log("Mago");
} else 
  console.log("Arquimago");



// Exibe o resultado
print(classificacao.trim());