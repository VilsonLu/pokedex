import React, { ReactElement, useState, useEffect } from "react";
import Typography from '@material-ui/core/Typography';
import SearchResult from "../ts/SearchResult";
import Pokegrid from '../components/pokegrid/Pokegrid';
import Pokeloader from '../components/pokeloader/Pokeloader';
import IPokemonAPI from '../ts/interfaces/IPokemonAPI';
import './Pokedex.module.scss';
interface IPokedexProps {
  pokemonAPI: IPokemonAPI
}

const Pokedex: React.FunctionComponent<IPokedexProps> = (props: IPokedexProps): ReactElement => {
  const [pokemons, setPokemons] = useState<SearchResult[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    if(pokemons && pokemons.length == 0) {
      props.pokemonAPI.getPokemonList().then((response) => {
        setPokemons(response);
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
        <Pokeloader showLoader={isLoading} />
      ) : (
        <Pokegrid pokemonResults={pokemons}></Pokegrid>
      )}
    </div>
  );
};

export default Pokedex;
