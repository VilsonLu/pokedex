import api from './HttpService';
import axios from 'axios';
import Pokemon from '../ts/Pokemon'

export default class PokemonAPI {

    public static getPokemonList(): Promise<any> {
        return api.get('pokemon?limit=20');
    }

    public static getPokemon(pokemonURI: string): Promise<Pokemon> {
        return axios.get(pokemonURI).then((response) => {
            return response.data;
        });
    }
}