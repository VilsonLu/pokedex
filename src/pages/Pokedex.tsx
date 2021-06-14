import React, { ReactElement, useState, useEffect } from "react";
import Pokemon from "../ts/Pokemon";
import Pokecard from "../components/pokecard/Pokecard";
import PokemonAPI from "../api/PokemonAPI";

import "./Pokedex.module.scss";

const Pokedex: React.FunctionComponent = (): ReactElement => {

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

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
