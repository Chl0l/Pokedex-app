import PropTypes from "prop-types";

function PokemonCard(props) {
  const pokemon = props.pokemon;
    return (
    <figure>
      {pokemon.imgSrc ? <img src = {pokemon.imgSrc}/> : <p> ???</p>}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
    )
};

PokemonCard.PropTypes = {
  pokemon: PropTypes.shapes ({
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default PokemonCard;