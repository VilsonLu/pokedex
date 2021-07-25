import api from './HttpService';
import axios from 'axios';
import IPokemonAPI from '../ts/interfaces/IPokemonAPI';
import Pokemon from '../ts/Pokemon';
import SearchResult from '../ts/SearchResult';

export class PokemonAPI implements IPokemonAPI {

    public getPokemonList(): Promise<SearchResult[]> {
        return api.get('pokemon?limit=500').then((response) => {
            return response.data.results;
        }).catch((error) => {
            return Promise.reject(error);
        });
    }

    public getPokemon(pokemonURI: string): Promise<Pokemon> {
        return axios.get(pokemonURI).then((response) => {
            return response.data;
        }).catch((error) => {
            return Promise.reject(error);
        });
    }

    public searchPokemon(searchTerm: string): Promise<Pokemon[]> {
        throw new Error('Method not implemented.');
    }

}

export class MockPokemonAPI implements IPokemonAPI {

    public getPokemonList(): Promise<SearchResult[]> {
        try {
            throw new Error("Method not implemented.");
        } catch(error) {
            return Promise.reject(error);
        }
    }

    public getPokemon(pokemonURI: string): Promise<Pokemon> {
        try {
            throw new Error("Method not implemented.");
        } catch(error) {
            return Promise.reject(error);
        }
    }
    
    public searchPokemon(searchTerm: string): Promise<Pokemon[]> {
        try {
            throw new Error("Method not implemented.");
        } catch(error) {
            return Promise.reject(error);
        }
    }

}