import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PokemonCard from "./components/PokemonCard.jsx"

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function App() {
  return (
    <div>
      <PokemonCard name = {pokemonList[0].name} imgSrc = {pokemonList[0].imgSrc} />
    </div>
  );
}

export default App