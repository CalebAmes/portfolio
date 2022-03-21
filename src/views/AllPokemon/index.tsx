import { useState, useEffect, useRef } from "react";
import MessageShrewdness from "../../components/MessageShrewdness";
import PokemonHolder from "../../components/PokemonHolder";
import "./AllPokemon.scss";
import Icons from "./icons";
import { themeHandler } from "../../components/index";

interface Project {
  name: string;
  details: string;
  image: string;
  live: string;
  github: string;
}

const projects = [
  {
    name: "Instructables 2",
    details:
      "A clone of the popular site Instructables.com. Built to explore key features, like complex forms and dynamic DOM elements.",
    image: "/images/thumbs/02.gif",
    live: "https://instructables2.herokuapp.com/",
    github: "https://github.com/calebames/instructables"
  },
  {
    name: "Program Hunt",
    details:
      "Influenced by Product Hunt, this light application allows users to share their favorite software.",
    image: "/images/thumbs/04.gif",
    live: "https://programhunt.herokuapp.com/",
    github: "https://github.com/CalebAmes/ProgramHunt"
  }
];

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
    fontSize: `${pageFontSize}pt`
  };

  const changeTheme = (e: any) => {
    setTheme(e.target.value);
  };

  useEffect(() => {
    let portfolio: any = localStorage.getItem("portfolio");
    if (portfolio) {
      portfolio = JSON.parse(portfolio);

      setTheme(portfolio && portfolio.theme);
    }
  }, []);

  useEffect(
    () => {
      themeHandler(theme);
    },
    [theme]
  );

  console.log("this is a rerender ===");

  const dontClick = { background: "red", cursor: "not-allowed" };

  return (
    <div style={fontAdjuster} className="allPokemonPage">
      <div className="topLeft">
        <div className="buttonGroup">
          <button
            value="dark"
            onClick={e => changeTheme(e)}
            className="styled_button"
          >
            Dark
          </button>
          <button
            value="light"
            onClick={e => changeTheme(e)}
            className="styled_button"
          >
            Light
          </button>
          <button
            value="red"
            onClick={e => changeTheme(e)}
            className="styled_button"
          >
            Red
          </button>
          <button
            value="blue"
            onClick={e => changeTheme(e)}
            className="styled_button"
          >
            Blue
          </button>
          <button
            style={pageFontSize >= 20 ? dontClick : {}}
            onClick={() =>
              setPageFontSize(
                () => (pageFontSize < 20 ? pageFontSize + 1 : pageFontSize)
              )
            }
            className="styled_button"
          >
            <i className="fa-solid fa-magnifying-glass-plus" />
          </button>
          <button
            style={pageFontSize <= 6 ? dontClick : {}}
            onClick={() =>
              setPageFontSize(
                () => (pageFontSize > 6 ? pageFontSize - 1 : pageFontSize)
              )
            }
            className="styled_button"
          >
            <i className="fa-solid fa-magnifying-glass-minus" />
          </button>
          <button className="styled_button" onClick={scrollBottom}>
            <i className="fa-solid fa-angles-down" />
          </button>
        </div>
      </div>
      <div className="allPokemonPage__title" />
      <div className="caleb_card_container">
        <div className="caleb_card">
          <div className="caleb_card__text">
            <h2 className="caleb_card__text-title">Caleb Ames Gilbert...</h2>
            <Icons />
            <div className="myLinks">
              <p>resume</p>
              <div className="buttonGroup">
                <a
                  href="https://www.linkedin.com/in/caleb-gilbert-b522ab142/"
                  target={"_blank"}
                  rel="noreferrer"
                  className="styled_button"
                >
                  <i className="fa-brands fa-linkedin" />
                </a>
                <a
                  href="https://github.com/CalebAmes"
                  target={"_blank"}
                  rel="noreferrer"
                  className="styled_button"
                >
                  <i className="fa-brands fa-github-square" />
                </a>
                <a
                  href="mailto: caleb-gilbert@live.com"
                  className="styled_button"
                >
                  <i className="fa-solid fa-envelope" />
                </a>
                <a
                  href={process.env.PUBLIC_URL + "/CalebGilbertResume.pdf"}
                  download="Caleb_Gilbert_Resume"
                  className="styled_button"
                >
                  <i className="fa-solid fa-file-arrow-down" />
                </a>
              </div>
            </div>
          </div>
          <img
            src={process.env.PUBLIC_URL + "/me.jpeg"}
            alt="Caleb"
            className="caleb_card-profile-image"
          />
        </div>
      </div>
      <div className="more_info">
        <p>
          I am a tinkerer first. If I can take it apart and see how it works,
          chances are I have. If I can modify it, chances are that I will. My
          preferred tools are JavaScript, React, Redux, Express, Sequelize, and
          SQL however I also enjoy Python and how easy it makes working with
          data, especially when paired with Flask and SQLAlchemy. This said I
          can learn anything and am always eager for the challenge. Send me a
          message and let's get the conversation started.
        </p>
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
            <h3>LINKS / CLICK ME!</h3>
            <ul>
              <li>
                <a
                  className="showcase__link"
                  href="https://shrewdness.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  - Live Link
                </a>
              </li>
              <li>
                <a
                  className="showcase__link"
                  href="https://github.com/CalebAmes/Shrewdness"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  - Github Repository
                </a>
              </li>
              <li>
                <a
                  className="showcase__link"
                  href="https://github.com/CalebAmes/ShrewdnessElectron"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  - Github for Electron version
                </a>
              </li>
            </ul>
          </div>
          <div className="showcase__grid-item">
            <h3>DESCRIPTION</h3>
            <p>
              Taking inspiration from Slack and Discord this group chat
              application hosts a powerhouse of features such as Themes,
              Autocomplete, Realtime messaging, updating and deleting to any
              number of clients. It also has a fully featured Electron Frontend
              that can be packaged into a Native desktop application for Mac,
              Windows or Linux. This version also includes Notifications.
            </p>
          </div>
          <div className="showcase__grid-item">
            <h3>NOTABLE FEATURES</h3>
            <ul>
              <li> - Desktop version of the application</li>
              <li> - Autocomplete with Trie (Data structure)</li>
              <li> - Instant Messaging with Socket.io</li>
              <li> - Themes (this is possible because of CSS variables)</li>
            </ul>
          </div>
        </div>
        <div className="messageShrewdness__div">
          <h3>Try it out here!</h3>
          <p>
            This is fully integrated with the Shrewdness socket and will allow
            you to interact with the Gorillas - General Channel
          </p>
          <MessageShrewdness />
        </div>
      </div>
      <h2 className="showcase__title">Sniffs</h2>
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
            <h3>LINKS / CLICK ME!</h3>
            <ul>
              <li>
                <a
                  className="showcase__link"
                  href="https://sniffs.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  - Live Link
                </a>
              </li>
              <li>
                <a
                  className="showcase__link"
                  href="https://github.com/CalebAmes/sniffs"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  - Github Repository
                </a>
              </li>
            </ul>
          </div>
          <div className="showcase__grid-item">
            <h3>DESCRIPTION</h3>
            <p>
              This event planner for dogs is loosely inspired by Meetup.com and
              highlights how powerful a minimalist and modern UI can be when
              paired with a single page React application.
            </p>
          </div>
        </div>
        <div className="showcase__image-div">
          <h3>Take a look!</h3>
          <img
            className="showcase__image"
            src={process.env.PUBLIC_URL + "/images/thumbs/03.gif"}
            alt=""
          />
        </div>
      </div>
      <h3>Group Projects</h3>
      <div className="allPokemonPage__grid">
        {projects.map((el: Project, idx) => (
          <div key={idx}>
            <PokemonHolder
              name={el.name}
              details={el.details}
              image={el.image}
              count={idx % 25}
              github={el.github}
              live={el.live}
            />
          </div>
        ))}
      </div>
      <div className="bottomButton">
        <div className="buttonGroup">
          <button ref={bottom} className="styled_button" onClick={scrollTop}>
            <i className="fa-solid fa-angles-up" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllPokemon;
