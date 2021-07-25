import api from './HttpService';
import axios from 'axios';
import IPokemonAPI from '../ts/interfaces/IPokemonAPI';
import Pokemon from '../ts/Pokemon';
import SearchResult from '../ts/SearchResult';

export default class PokemonAPI implements IPokemonAPI {

    public getPokemonList(): Promise<SearchResult[]> {
        return api.get('pokemon?limit=500').then((response) => {
            return response.data.results;
        });
    }

    public getPokemon(pokemonURI: string): Promise<Pokemon> {
        return axios.get(pokemonURI).then((response) => {
            return response.data;
        });
    }

    public searchPokemon(searchTerm: string): Promise<Pokemon[]> {
        throw new Error('Method not implemented.');
    }

}