import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PokemonCard from "./components/PokemonCard.jsx"
import NavBar from './components/NavBar.jsx'

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {
  const [pokemonIndex, setpokemonIndex] = useState(0);

  return (
    <div>
      < PokemonCard pokemon = {pokemonList[pokemonIndex]} />
      < NavBar pokemonList={pokemonList} pokemonIndex={pokemonIndex} setpokemonIndex={setpokemonIndex} />
    </div>
  );
}

export default App



// Avec seulement dans "NavBar.jsx" les 2 boutons

// function App() {
//   const [pokemonIndex, setpokemonIndex] = useState(0);

//   const incrementIndex = () => {
//     if (pokemonIndex < pokemonList.length - 1) {
//       setpokemonIndex(pokemonIndex+1)
//     }
//   }
  
//   const decrementIndex = () => {
//     if (pokemonIndex > 0) {
//       setpokemonIndex(pokemonIndex-1)
//     }
//   }

//   return (
//     <div>
//       < PokemonCard pokemon = {pokemonList[pokemonIndex]} />
//       < NavBar setpokemonIndex={decrementIndex} pokemonIndex={incrementIndex} />
//     </div>
//   );
// }