import api from './HttpService';
import axios from 'axios';
import Pokemon from '../ts/Pokemon';
import SearchResult from '../ts/SearchResult';

export default class PokemonAPI {

    public static getPokemonList(): Promise<SearchResult[]> {
        return api.get('pokemon?limit=500').then((response) => {
            return response.data.results;
        });
    }

    public static getPokemon(pokemonURI: string): Promise<Pokemon> {
        return axios.get(pokemonURI).then((response) => {
            return response.data;
        });
    }
}