import React, { ReactElement, useState, useEffect } from "react";
import Pokecard from "../components/pokecard/Pokecard";
import PokemonAPI from "../api/PokemonAPI";

import "./Pokedex.module.scss";

const Pokedex: React.FunctionComponent = (): ReactElement => {

  const [pokemons, setPokemons] = useState<any[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    PokemonAPI.getPokemonList().then((response) => {
      setPokemons(response.data.results);
      setLoading(false);
    });
  })

  return (
    <div>
      <h1>Welcome to Pokedex</h1>

      {
        isLoading ? <p>Loading...</p> :
        pokemons.map((x) => {
          return <Pokecard key={x.name} name={x.name} url={x.url}/>;
        })
      }
    </div>
  );
};

export default Pokedex;
