import React from "react";
import "./PokemonHolder.css"

interface ProjectDetails {
  name: string;
  details: string;
  image: string;
  count: number;
  github: string;
  live: string;
}

const PokemonHolder: React.FC<ProjectDetails> = (props) => {
  const animationDelay = {
    'animationDelay': `${props.count}00ms`,
  }
  
  return (
    <div className="pokemonCard" style={animationDelay}>
      <div className="pokemonCard__image" >
        <img className="pokemonCard__image-image" src={process.env.PUBLIC_URL + props.image} alt="" />
      </div>
      <div className="pokemonCard__info">
        <h1 className="pokemonCard__info-name">{props.name}</h1>
        <p className="pokemonCard__info-details">{props.details}</p>
        <div className="buttonGroup groupProjectButton">
          <a href={props.github} target="_blank" className="styled_button">
            <i className="fa-brands fa-github-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PokemonHolder;
