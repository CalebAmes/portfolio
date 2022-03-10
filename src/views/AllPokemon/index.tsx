import { useState, useEffect, useRef } from "react";
import PokemonHolder from "../../components/PokemonHolder";
import { fetchPokemon } from "../../utils/api";
import "./AllPokemon.css";

interface Pokemon {
  name: string;
  details: string;
  image: string;
}

const AllPokemon = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
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

  const grabPokemon = async (offset: number = 0, scroll: boolean = false) => {
    const data = await fetchPokemon(offset);
    if (offset !== 0) {
      setPokemon((pokemon) => [...pokemon, ...data]);
    } else {
      setPokemon(data);
    }
    if (scroll) {
      setTimeout(scrollBottom, 1500);
    }
    return null;
  };

  const morePokemonHandler = () => {
    grabPokemon(offset, true);
    setOffset((offset) => offset + 25);
  };

  const changeTheme = () => {
    if(theme === "dark") setTheme("light")
    else setTheme("dark")
  };

  const themeHandler = () => {
    const title = top.current;
    const body = document.body;
    if (theme === "dark") {
      body.classList.add("dark-background");
      body.classList.remove("light-background");
      title.classList.add("allPokemonPage__title--dark");
      title.classList.remove("allPokemonPage__title--light");
      localStorage.setItem('pokedex', JSON.stringify({ theme: 'dark'}));
    } else {
      body.classList.add("light-background");
      body.classList.remove("dark-background");
      title.classList.add("allPokemonPage__title--light");
      title.classList.remove("allPokemonPage__title--dark");
      localStorage.setItem('pokedex', JSON.stringify({
        theme: 'light'
      }))
    }
  }
  
  useEffect(() => {
    grabPokemon();
    let pokedex:any = localStorage.getItem('pokedex');
    if(pokedex) {
      pokedex = JSON.parse(pokedex)
      setTheme(pokedex?.theme)
    }
  }, []);

  useEffect(() => {
    themeHandler()
  }, [theme]);


  return (
    <div className="allPokemonPage">
      <button
        onClick={changeTheme}
        className="allPokemonPage__button themeChange"
      >
        Theme
      </button>
      <h1 ref={top} className="allPokemonPage__title">
        all pokemon page
      </h1>
      <button className="allPokemonPage__button" onClick={scrollBottom}>
        Scroll to bottom
      </button>
      <div className="allPokemonPage__grid" ref={grid}>
        {pokemon.map((el: Pokemon, idx) => (
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
      <button className="allPokemonPage__button" onClick={morePokemonHandler}>
        More Pokemon
      </button>
      <button className="allPokemonPage__button" onClick={scrollTop}>
        Scroll to top
      </button>
    </div>
  );
};

export default AllPokemon;
