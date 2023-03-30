import { useState } from 'react';

// Tu vas générer un bouton par pokémon dans le composant NavBar.
// Enlève d'abord les boutons "précédent" et "suivant".
// Boucle sur pokemonList directement dans le return du composant à l'aide de map.

function NavBar({pokemonList, pokemonIndex, setpokemonIndex}) {

    const handleClick = (e) => {
      setpokemonIndex(pokemonIndex === e.target.value)
    }

    return (
        <div>
          {pokemonList.map((element) => (
            <button key={element.id} onClick={handleClick}>{element.name}</button>
            ) 
          )}
        </div>
    )
}

export default NavBar;



// function NavBar({pokemonList, pokemonIndex, setpokemonIndex}) {

//   const incrementIndex = () => {
//       if (pokemonIndex < pokemonList.length - 1) {
//         setpokemonIndex(pokemonIndex+1)
//       }
//     }
    
//     const decrementIndex = () => {
//       if (pokemonIndex > 0) {
//         setpokemonIndex(pokemonIndex-1)
//       }
//     }

//   return (
//       <div>
//           {pokemonIndex > 0 ? <button onClick={decrementIndex}>Previous</button> : ""}
//           {pokemonIndex < pokemonList.length - 1 ? <button onClick={incrementIndex}>Next</button> : ""}
//       </div>
//   )
// }

// export default NavBar;