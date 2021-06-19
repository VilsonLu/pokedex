import React, { ReactElement, useState } from 'react';
import Grid from "@material-ui/core/Grid";
import Pokecard from '../pokecard/Pokecard';
import SearchResult from '../../ts/SearchResult';

interface IPokeGridProps {
    pokemonResults: SearchResult[];
}

const Pokegrid: React.FunctionComponent<IPokeGridProps> = (props: IPokeGridProps): ReactElement => {
    const [pokemons, setPokemons] = useState<SearchResult[]>(props.pokemonResults);

    return (<Grid container spacing={2}>
        {pokemons.map((x) => {
          return (
            <Grid key={x.name} item xs={12} sm={6} md={3} lg={2} xl={2}>
              <Pokecard key={x.name} name={x.name} url={x.url} />
            </Grid>
          );
        })}
      </Grid>);
}

export default Pokegrid;