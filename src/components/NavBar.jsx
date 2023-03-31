import React from 'react';

//Tu vas générer un bouton par pokémon dans le composant NavBar.
//Enlève d'abord les boutons "précédent" et "suivant".
//Boucle sur pokemonList directement dans le return du composant à l'aide de map.

function NavBar({pokemonList, setpokemonIndex}) {

      const handleClick = (id) => {
          setpokemonIndex(id -1)
      }
      
    return (
        <div>
            {pokemonList.map((element) => <button key = {element.id} onClick={() => handleClick(element.id)}>{element.name}</button>)}
        </div>
    )
}

export default NavBar;