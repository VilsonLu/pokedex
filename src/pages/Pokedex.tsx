import React, { ReactElement, useState, useEffect } from "react";
import Typography from '@material-ui/core/Typography';
import SearchResult from "../ts/SearchResult";
import Pokegrid from '../components/pokegrid/Pokegrid';
import Pokeloader from '../components/pokeloader/Pokeloader';
import ErrorComponent from "../components/error/ErrorComponent";
import IPokemonAPI from '../ts/interfaces/IPokemonAPI';
import './Pokedex.module.scss';

interface IPokedexProps {
  pokemonAPI: IPokemonAPI
}

const Pokedex: React.FunctionComponent<IPokedexProps> = (props: IPokedexProps): ReactElement => {
  const [pokemons, setPokemons] = useState<SearchResult[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);

  const { pokemonAPI } = props
  
  useEffect(() => {
    if (pokemons && pokemons.length == 0) {
      pokemonAPI
        .getPokemonList()
        .then((response) => {
          setPokemons(response);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setError(true);
          setLoading(false);
        });
    }
  });

  const componentHandler = (isError: boolean) => {

    const errorComponent = <ErrorComponent/>
    const pokeGrid = <Pokegrid pokemonResults={pokemons}></Pokegrid>

    return (
        isError ? errorComponent : pokeGrid
    )
  }

  return (
    <>
      <Typography gutterBottom variant="h1" component="h1">
        Pokedex
      </Typography>

      {isLoading ? (
        <Pokeloader showLoader={isLoading} />
      ) : (
        componentHandler(isError)
      )}
    </>
  );
};

export default Pokedex;
