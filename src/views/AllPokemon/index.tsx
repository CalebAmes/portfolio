import { useState, useEffect, useRef } from "react";
import MessageShrewdness from "../../components/MessageShrewdness";
import PokemonHolder from "../../components/PokemonHolder";
import "./AllPokemon.scss";
import Icons from "./icons";
import { themeHandler } from '../../components/index'

interface Pokemon {
  name: string;
  details: string;
  image: string;
}

const projects = [
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

  useEffect(() => {
    let portfolio: any = localStorage.getItem('portfolio');
    if (portfolio) {
      portfolio = JSON.parse(portfolio)

      setTheme(portfolio?.theme)
    }
  }, []);

  useEffect(() => {
    themeHandler(theme)
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
            <Icons />
          </div>
          <img src={process.env.PUBLIC_URL + "/me.jpeg"} alt="Picture of Caleb" className="caleb_card-profile-image" />
        </div>
      </div>
      <div className="more_info">
        <p>I am a tinkerer first. If I can take it apart and see how it works, chances are I have. If I can modify it, chances are that I will. My preferred tools are JavaScript, React, Redux, Express, Sequelize, and SQL however I also enjoy Python and how easy it makes working with data, especially when paired with Flask and SQLAlchemy. This said I can learn anything and am always eager for the challenge. Send me a message and let's get the conversation started.</p>
      </div>
      <h2 className="showcase__title">Shrewdness</h2>
      <div className="showcase">
        <div className="showcase__grid">
          <div className="showcase__grid-item">
            <h3>FRONTEND</h3>
            <ul>
              <li> - SCSS</li>
              <li> - REACT</li>
              <li> - REDUX</li>
              <li> - SOCKET.IO</li>
              <li> - ELECTRON</li>
            </ul>
          </div>
          <div className="showcase__grid-item">
            <h3>BACKEND</h3>
            <ul>
              <li> - NODE.JS</li>
              <li> - EXPRESS.JS</li>
              <li> - SOCKET.IO</li>
              <li> - SEQUELIZE</li>
              <li> - POSTGRESQL</li>
            </ul>
          </div>
          <div className="showcase__grid-item">
            <h3>LINKS</h3>
            <ul>
              <li> - GITHUB1</li>
              <li> - GITHUB2</li>
              <li> - LIVELINK</li>
            </ul>
          </div>
          <div className="showcase__grid-item">
            <h3>DESCRIPTION</h3>
            <p>
              Chat application with web and desktop versions. Real-time communication, auto-complete, notifications, themes and more.

              Voluptate elit qui excepteur cillum. Aliqua eu sint excepteur exercitation quis ea do. Culpa sint laborum nulla excepteur esse laborum elit cupidatat nisi duis cillum commodo exercitation incididunt. Cillum proident commodo non exercitation nisi eu sit laboris.
            </p>
          </div>
          <div className="showcase__grid-item">
            <h3>NOTABLE FEATURES</h3>
            <ul>
              <li> - Desktop version of the application</li>
              <li> - Autocomplete with Trie</li>
              <li> - Instant Messaging with Socket.io</li>
            </ul>
          </div>
        </div>
        <div className="messageShrewdness__div">
          <h3>Try it out here!</h3>
          <MessageShrewdness />
        </div>
      </div>
      <h2 className="showcase__title">sniffs.</h2>
      <div className="showcase reverseFlex">
        <div className="showcase__grid reverseGrid">
          <div className="showcase__grid-item">
            <h3>FRONTEND</h3>
            <ul>
              <li> - SCSS</li>
              <li> - REACT</li>
              <li> - REDUX</li>
              <li> - SOCKET.IO</li>
              <li> - ELECTRON</li>
            </ul>
          </div>
          <div className="showcase__grid-item">
            <h3>BACKEND</h3>
            <ul>
              <li> - NODE.JS</li>
              <li> - EXPRESS.JS</li>
              <li> - SOCKET.IO</li>
              <li> - SEQUELIZE</li>
              <li> - POSTGRESQL</li>
            </ul>
          </div>
          <div className="showcase__grid-item">
            <h3>LINKS</h3>
            <ul>
              <li> - GITHUB1</li>
              <li> - GITHUB2</li>
              <li> - LIVELINK</li>
            </ul>
          </div>
          <div className="showcase__grid-item">
            <h3>DESCRIPTION</h3>
            <p>
              Chat application with web and desktop versions. Real-time communication, auto-complete, notifications, themes and more.

              Voluptate elit qui excepteur cillum. Aliqua eu sint excepteur exercitation quis ea do. Culpa sint laborum nulla excepteur esse laborum elit cupidatat nisi duis cillum commodo exercitation incididunt. Cillum proident commodo non exercitation nisi eu sit laboris.
            </p>
          </div>
          <div className="showcase__grid-item">
            <h3>NOTABLE FEATURES</h3>
            <ul>
              <li> - Desktop version of the application</li>
              <li> - Autocomplete with Trie</li>
              <li> - Instant Messaging with Socket.io</li>
            </ul>
          </div>
        </div>
        <div className="showcase__image-div">
          <h3>Take a look!</h3>
          <img className="showcase__image" src={process.env.PUBLIC_URL + "/images/thumbs/03.gif"} alt="" />
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
      <button ref={bottom} className="allPokemonPage__button" onClick={scrollTop}>
        <i className="fa-solid fa-angles-up"></i>
      </button>
    </div >
  );
};

export default AllPokemon;
