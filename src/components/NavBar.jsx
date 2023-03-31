import React from 'react';

function NavBar({pokemonList, pokemonIndex, setpokemonIndex}) {

    const incrementIndex = () => {
        if (pokemonIndex < pokemonList.length - 1) {
          setpokemonIndex(pokemonIndex+1)
      }
    }
      
      const decrementIndex = () => {
        if (pokemonIndex > 0) {
          setpokemonIndex(pokemonIndex-1)
        }
      }

      const handleChange = () => {
        if (pokemonIndex == 4) {
          console.log("Pika pikachu !!!")
        }
      }
      
    return (
        <div>
            {pokemonIndex > 0 ? <button onClick={decrementIndex}>Previous</button> : ""}
            {pokemonIndex < pokemonList.length - 1 ? <button onClick={incrementIndex}>Next</button> : ""}
        </div>
    )
}

export default NavBar;

// Ouvre ensuite une alerte avec le message "pika pikachu !!!" quand le pokémon choisi via le composant NavBar devient "pikachu" (mise à jour de NavBar). Pour cette 2e partie, "You Might Not Need an Effect".