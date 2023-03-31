import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PokemonCard from "./components/PokemonCard.jsx"
import NavBar from './components/NavBar.jsx'

const pokemonList = [
  {
    id: 1,  
    name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      id: 2,
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      id: 3,
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      id: 4,
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      id: 5,
      name: "mew",
    },
  ];

function App() {
  const [pokemonIndex, setpokemonIndex] = useState(0);

  return (
    <div>
      < PokemonCard pokemon = {pokemonList[pokemonIndex]} />
      < NavBar pokemonList={pokemonList}setpokemonIndex={setpokemonIndex} />
    </div>
  );
}

export default App