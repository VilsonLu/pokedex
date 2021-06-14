import React, { ReactElement } from "react";
import Pokecard from "../components/pokecard/Pokecard";

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

const Pokedex: React.FunctionComponent = (): ReactElement => {
  return (
    <div>
      <h1>Welcome to Pokedex</h1>

      {pokemonList.map((x) => {
        return <Pokecard key={x.name} {...x} />;
      })}
    </div>
  );
};

export default Pokedex;
