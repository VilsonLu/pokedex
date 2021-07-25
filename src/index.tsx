import React from 'react';
import { render } from 'react-dom';
import PokemonAPI from './api/PokemonAPI';
import Pokedex from './pages/Pokedex';


const pokemonAPI = new PokemonAPI();
render(<Pokedex pokemonAPI={pokemonAPI} />, document.getElementById('root'));