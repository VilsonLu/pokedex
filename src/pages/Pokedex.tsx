import React, { ReactElement } from 'react';

import Pokecard from '../components/pokecard/Pokecard';

import './Pokedex.module.scss';

const Pokedex: React.FunctionComponent = (): ReactElement  => {
  return (
      <div>
        <h3>Welcome to Pokedex</h3>
        <Pokecard/>
        <Pokecard/>
      </div>
      
  );
};

export default Pokedex;