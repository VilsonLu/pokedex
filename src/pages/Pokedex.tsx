import React, { ReactElement, useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import Pokecard from "../components/pokecard/Pokecard";
import PokemonAPI from "../api/PokemonAPI";
import "./Pokedex.module.scss";

const Pokedex: React.FunctionComponent = (): ReactElement => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    if(pokemons && pokemons.length == 0) {
      PokemonAPI.getPokemonList().then((response) => {
        setPokemons(response.data.results);
        setLoading(false);
      });
    } 
  });

  return (
    <div>
      <Typography gutterBottom variant="h1" component="h1">
        Pokedex
      </Typography>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Grid container spacing={2}>
          {pokemons.map((x) => {
            return (
              <Grid key={x.name} item xs={12} sm={6} md={3} lg={2} xl={2}>
                <Pokecard key={x.name} name={x.name} url={x.url} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
};

export default Pokedex;
