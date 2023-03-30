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

    return (
        <div>
            {pokemonIndex > 0 ? <button onClick={decrementIndex}>Previous</button> : ""}
            {pokemonIndex < pokemonList.length - 1 ? <button onClick={incrementIndex}>Next</button> : ""}
        </div>
    )
}

export default NavBar;



// Avec les 3 const dans "Apps.jxs"

// function NavBar({pokemonIndex, setpokemonIndex}) {
//     return (
//         <div>
//         <button onClick={setpokemonIndex}>Previous</button>
//         <button onClick={pokemonIndex}>Next</button>
//     </div>
//     )
// }