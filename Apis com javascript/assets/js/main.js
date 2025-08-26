
function convertePokemonToLi(pokemon){
    return `
             <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>
                
                <div class="detail">
                    <ol class="types">
                        <li class="type">Grass</li>
                        <li class="type">Poison</li>
                    </ol>

                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1f619ed0-b566-4538-8392-bf02ca7a76cd/dck5gtf-62b47ad8-127a-43d4-9077-6352101ca55f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFmNjE5ZWQwLWI1NjYtNDUzOC04MzkyLWJmMDJjYTdhNzZjZFwvZGNrNWd0Zi02MmI0N2FkOC0xMjdhLTQzZDQtOTA3Ny02MzUyMTAxY2E1NWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fUlcLxBTGCafYvQrLFNF5UpvY7yKbUT5P8eqnZrOoRM" alt="${pokemon.name}">
                
                </div>
           
            </li>
    `
}

const pokemonList = document.getElementById('pokemonsList')


// Json pegando a lista de pokemons do Body da pagina
    pokeApi.getPokemons().then((pokemonsList = []) => {
        pokemonList.innerHTML += pokemonsList.map(convertePokemonToLi).join('')
               
    })

    console.log(newList)
  
  
  
  
  
  
  /*       for (let i = 0; i < pokemonsList.length; i++) {
            const pokemon = pokemonsList[i];
            pokemonList.innerHTML += convertePokemonToLi('pokemon')

        }
    
    
    })   
    .catch((erro)=>console.log(erro))
  */
    
  

/*
    .catch(function (erro){
        console.erro(erro)
    })
    .finally(function(){
        console.log('Requisição Concluida')
    }
)
*/
