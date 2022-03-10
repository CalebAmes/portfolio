import React from "react";
import "./PokemonHolder.css"

interface PokemonDetails {
  name: string;
  details: string;
  image: string;
  count: number;
}

const PokemonHolder: React.FC<PokemonDetails> = (props) => {

  const animationDelay = {
    'animationDelay': `${props.count}00ms`
  }

  return (
    <div className="pokemonCard" style={animationDelay}>
      <div className="pokemonCard__image" >
        <img src={props.image} alt="" />
      </div>
      <div className="pokemonCard__info">
        <h1 className="pokemonCard__info-name">{props.name}</h1>
        <p className="pokemonCard__info-details">{props.details}</p>
      </div>
    </div>
  );
};

export default PokemonHolder;
