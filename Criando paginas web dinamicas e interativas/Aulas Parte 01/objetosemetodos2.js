// VARIAVEIS PODEM RECEBER FUNÇÂO

const x = {
    nome: "Ricardo",
    idade: 32,
    
    
    oi: function(){
        console.log('ola')
    },
   
   
    falar: function(){
    console.log('teste')
},

    dizernome: function(){
        console.log(`meu nome é ${x.nome}`)
    }
}

x.oi();

x.falar();

x.dizernome();