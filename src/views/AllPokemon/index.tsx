import { useState, useEffect, useRef } from "react";
import MessageShrewdness from "../../components/MessageShrewdness";
import PokemonHolder from "../../components/PokemonHolder";
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
    details: "Loosely inspired by Meetup.com, this application highlights how powerful a minimalist and modern UI can be with a single page application.",
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
  const [theme, setTheme] = useState<string>("light");
  const [pageFontSize, setPageFontSize] = useState<number>(12);
  const bottom = useRef<any>(null);

  const scrollTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  const scrollBottom = () => {
    bottom.current.lastChild.scrollIntoView({ behavior: "smooth" });
  };

  const fontAdjuster = {
    fontSize: `${pageFontSize}pt`,
  }

  const changeTheme = (e: any) => {
    setTheme(e.target.value)
  };

  const themeHandler = () => {
    const body = document.body;
    if (theme === "dark") {
      body.classList.add("dark-background");
      body.classList.remove("light-background");
      body.classList.remove("red-background");
      body.classList.remove("blue-background");
      localStorage.setItem('portfolio', JSON.stringify({ theme: 'dark' }));
    } else if (theme === "light") {
      body.classList.add("light-background");
      body.classList.remove("dark-background");
      body.classList.remove("red-background");
      body.classList.remove("blue-background");
      localStorage.setItem('portfolio', JSON.stringify({
        theme: 'light'
      }))
    } else if (theme === "blue") {
      body.classList.add("blue-background");
      body.classList.remove("dark-background");
      body.classList.remove("red-background");
      body.classList.remove("light-background");
      localStorage.setItem('portfolio', JSON.stringify({
        theme: 'blue'
      }))
    } else if (theme === "red") {
      body.classList.add("red-background");
      body.classList.remove("dark-background");
      body.classList.remove("blue-background");
      body.classList.remove("light-background");
      localStorage.setItem('portfolio', JSON.stringify({
        theme: 'red'
      }))
    }
  }

  useEffect(() => {
    let portfolio: any = localStorage.getItem('portfolio');
    if (portfolio) {
      portfolio = JSON.parse(portfolio)

      setTheme(portfolio?.theme)
    }
  }, []);

  useEffect(() => {
    themeHandler()
  }, [theme]);


  const dontClick = { background: 'red', cursor: 'not-allowed' }

  return (
    <div style={fontAdjuster} className="allPokemonPage">
      <div className="themeChange">
        <button
          value="dark"
          onClick={e => changeTheme(e)}
          className="allPokemonPage__button"
        >
          Dark
        </button>
        <button
          value="light"
          onClick={e => changeTheme(e)}
          className="allPokemonPage__button"
        >
          Light
        </button>
        <button
          value="red"
          onClick={e => changeTheme(e)}
          className="allPokemonPage__button"
        >
          Red
        </button>
        <button
          value="blue"
          onClick={e => changeTheme(e)}
          className="allPokemonPage__button"
        >
          Blue
        </button>
        <button
          style={pageFontSize >= 20 ? dontClick : {}}
          onClick={() => setPageFontSize(() => pageFontSize < 20 ? pageFontSize + 1 : pageFontSize)} className="allPokemonPage__button"
        >
          <i className="fa-solid fa-magnifying-glass-plus"></i>
        </button>
        <button
          style={pageFontSize <= 6 ? dontClick : {}}
          onClick={() => setPageFontSize(() => pageFontSize > 6 ? pageFontSize - 1 : pageFontSize)}
          className="allPokemonPage__button"
        >
          <i className="fa-solid fa-magnifying-glass-minus"></i>
        </button>
        <button className="allPokemonPage__button" onClick={scrollBottom}>
          <i className="fa-solid fa-angles-down"></i>
        </button>
      </div>
      <div className="allPokemonPage__title" />
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
      <div className="allPokemonPage__grid" >
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
      <div className="more_info">
        <p>I am a tinkerer first. If I can take it apart and see how it works, chances are I have. If I can modify it, chances are that I will. My preferred tools are JavaScript, React, Redux, Express, Sequelize, and SQL however I also enjoy Python and how easy it makes working with data, especially when paired with Flask and SQLAlchemy. This said I can learn anything and am always eager for the challenge. Send me a message and let's get the conversation started.</p>
      </div>
      <MessageShrewdness />
      <div className="spotify">
        <h2 className="spotify_title">Currently Listening on Spotify</h2>
        <a href="https://open.spotify.com/user/214pqxcs7k2cos6kqton5zssa" target="_blank">
          <img src="https://calebames.vercel.app/api/spotify" alt="Spotify now playing" />
        </a>
      </div>
      <button ref={bottom} className="allPokemonPage__button" onClick={scrollTop}>
        <i className="fa-solid fa-angles-up"></i>
      </button>
    </div>
  );
};

export default AllPokemon;
