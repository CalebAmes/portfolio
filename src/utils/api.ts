interface PokemonApi {
  name: string;
}

const dataFormatter = (obj: PokemonApi, idx: number = 1) => {
  return {
    name: obj.name,
    details:
      "Est excepteur do eiusmod officia consectetur velit veniam ad irure nulla consequat. Aute et ullamco ea laboris ea elit veniam esse. Culpa nulla Lorem ut est ullamco ut exercitation et occaecat sint. Mollit eu ipsum anim non ad proident incididunt incididunt exercitation cupidatat culpa laboris non. Esse sunt amet et Lorem eu est consectetur ea eiusmod ad ipsum ut laborum in.",
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx}.png`,
  };
};

export const fetchPokemon = async (offset: number = 0, limit: number = 25) => {
  const data: any = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));
  return data.results.map((el: PokemonApi, idx: number) =>
    dataFormatter(el, idx + offset + 1)
  );
};
