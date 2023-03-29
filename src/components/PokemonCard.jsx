function PokemonCard({name, imgSrc}) {
    return (
    <figure>
      {imgSrc ? <img src = {imgSrc}/> : <p> ???</p>}
      <figcaption>{name}</figcaption>
    </figure>
    )
};

export default PokemonCard;