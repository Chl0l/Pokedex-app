/* React 3a*/
// function PokemonCard() {
//     const pokemon = pokemonList[0];
//     const {name, imgSrc} = pokemon;

//     return(
//         <figure>
//             <img src={imgSrc} alt="Pokemon" />
//             <figcaption>{name}</figcaption>
//         </figure>
//     );
// }

// const pokemonList = [
//     {
//       name: "bulbasaur",
//       imgSrc:
//         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
//     },
//     {
//       name: "mew",
//     },
//   ];

// export default PokemonCard;



/* React 3b*/

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

function PokemonCard() {
  const pokemon = pokemonList[0];
  const {name, imgSrc} = pokemon;
    return (
    <figure>
      {imgSrc ? <img src = {imgSrc}/> : <p> ???</p>}
      <figcaption>{name}</figcaption>
    </figure>
    )
};

export default PokemonCard;