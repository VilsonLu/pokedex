import React, { ReactElement, useState, useEffect } from "react";
import Pokecard from "../components/pokecard/Pokecard";
import PokemonAPI from "../api/PokemonAPI";

import "./Pokedex.module.scss";

const pokemonList = [
  {
    name: "Pikachu",
    type: "Electric",
    description: "test"
  },
  {
    name: "Gengar",
    type: "Ghost",
    description: "test"
  },
  {
    name: "Squirtle",
    type: "Water",
    description: "test"
  },
  {
    name: "Charmander",
    type: "Fire",
    description: "test"
  },
];

interface IPokemon {
  name: string,
  url: string
}

const Pokedex: React.FunctionComponent = (): ReactElement => {

  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  useEffect(() => {
    PokemonAPI.getPokemons().then((response) => {
      setPokemons(response.data.results);
    });
  })

  return (
    <div>
      <h1>Welcome to Pokedex</h1>

      {pokemons.map((x) => {
        return <Pokecard key={x.name} name={x.name} type={x.url} description={x.url}/>;
      })}
    </div>
  );
};

export default Pokedex;
