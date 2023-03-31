import React from 'react';
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