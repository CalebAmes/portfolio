import { useState, useEffect, useRef } from "react";
import PokemonHolder from "../../components/PokemonHolder";
import { fetchPokemon } from "../../utils/api";
import "./AllPokemon.scss";

interface Pokemon {
  name: string;
  details: string;
  image: string;
}

const projects = [
  {
    name: "Shrewdness",
    details: "Chat application with web and desktop versions. Real-time communication, auto-complete, notifications, themes and more.",
    image: "/images/thumbs/01.gif"
  },
  {
    name: "Sniffs",
    details: "Loosely inspired by Meetup.com, this application highlights how powerful a minimalistic and modern UI can be with a single page application.",
    image: "/images/thumbs/03.gif"
  },
  {
    name: "Instructables 2",
    details: "A clone of the popular site Instructables.com. Built to explore key features, like complex forms and dynamic DOM elements.",
    image: "/images/thumbs/02.gif"
  },
  {
    name: "Program Hunt",
    details: "Influenced by Product Hunt, this light application allows users to share their favorite software.",
    image: "/images/thumbs/04.gif"
  },
]

const AllPokemon = () => {
  const [offset, setOffset] = useState(25);
  const [theme, setTheme] = useState<string>("light");
  const grid = useRef<any>(null);
  const top = useRef<any>(null);

  const scrollTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  const scrollBottom = () => {
    grid.current.lastChild.scrollIntoView({ behavior: "smooth" });
  };

  const changeTheme = () => {
    if (theme === "dark") setTheme("light")
    else setTheme("dark")
  };

  const themeHandler = () => {
    const title = top.current;
    const body = document.body;
    if (theme === "dark") {
      body.classList.add("dark-background");
      body.classList.remove("light-background");
      localStorage.setItem('pokedex', JSON.stringify({ theme: 'dark' }));
    } else {
      body.classList.add("light-background");
      body.classList.remove("dark-background");
      localStorage.setItem('pokedex', JSON.stringify({
        theme: 'light'
      }))
    }
  }

  useEffect(() => {
    let pokedex: any = localStorage.getItem('pokedex');
    if (pokedex) {
      pokedex = JSON.parse(pokedex)

      setTheme(pokedex?.theme)
    }
  }, []);

  useEffect(() => {
    themeHandler()
  }, [theme]);


  return (
    <div className="allPokemonPage">
      <div className="themeChange">
        <button
          onClick={changeTheme}
          className="allPokemonPage__button"
        >
          Theme
        </button>
        <button className="allPokemonPage__button" onClick={scrollBottom}>
          <i className="fa-solid fa-angles-down"></i>
        </button>
      </div>
      <h1 ref={top} className="allPokemonPage__title">
        welcome
      </h1>
      <div className="caleb_card_container">
        <div className="caleb_card">
          <div className="caleb_card__text">
            <h2 className="caleb_card__text-title">Caleb Ames Gilbert...</h2>
            <div className="icons">
              <img alt="typescript" src="https://img.shields.io/badge/typescript-%23E34F26.svg?&style=for-the-badge&logo=typescript&logoColor=white" />
              <img alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white" />
              <img alt="CSS3" src="https://img.shields.io/badge/css3-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white" />
              <img alt="SASS" src="https://img.shields.io/badge/SASS-hotpink.svg?&style=for-the-badge&logo=SASS&logoColor=white" />
              <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
              <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB" />
              <img alt="Redux" src="https://img.shields.io/badge/redux-%23593d88.svg?&style=for-the-badge&logo=redux&logoColor=white" />
              <img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white" />
              <img alt="Express.js" src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
              <img alt="Mocha" src="https://img.shields.io/badge/-mocha-%238D6748?&style=for-the-badge&logo=mocha&logoColor=white" />
              <img alt="Postgres" src="https://img.shields.io/badge/postgres-%23316192.svg?&style=for-the-badge&logo=postgresql&logoColor=white" />
              <img alt="Python" src="https://img.shields.io/badge/python-%2314354C.svg?&style=for-the-badge&logo=python&logoColor=white" />
              <img alt="Flask" src="https://img.shields.io/badge/flask-%23000.svg?&style=for-the-badge&logo=flask&logoColor=white" />
              <img alt="Webpack" src="https://img.shields.io/badge/webpack-%238DD6F9.svg?&style=for-the-badge&logo=webpack&logoColor=black" />
              <img alt="Heroku" src="https://img.shields.io/badge/heroku-%23430098.svg?&style=for-the-badge&logo=heroku&logoColor=white" />
              <img alt="Vercel" src="https://img.shields.io/badge/vercel-%23000000.svg?&style=for-the-badge&logo=vercel&logoColor=white" />
              <img alt="AWS" src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" />
              <img alt="Visual Studio Code" src="https://img.shields.io/badge/VisualStudioCode-0078d7.svg?&style=for-the-badge&logo=visual-studio-code&logoColor=white" />
            </div>
          </div>
          <img src={process.env.PUBLIC_URL + "/me.jpeg"} alt="Picture of Caleb" className="caleb_card-profile-image" />
        </div>
      </div>
      <div className="allPokemonPage__grid" ref={grid}>
        {projects.map((el: Pokemon, idx) => (
          <div key={idx}>
            <PokemonHolder
              name={el.name}
              details={el.details}
              image={el.image}
              count={idx % 25}
            />
          </div>
        ))}
      </div>
      <div className="spotify">
        <h2 className="spotify_title">Currently Listening on Spotify</h2>
        <a href="https://open.spotify.com/user/214pqxcs7k2cos6kqton5zssa" target="_blank">
          <img src="https://calebames.vercel.app/api/spotify" alt="Spotify now playing" />
        </a>
      </div>
      <button className="allPokemonPage__button" onClick={scrollTop}>
        <i className="fa-solid fa-angles-up"></i>
      </button>
    </div>
  );
};

export default AllPokemon;
