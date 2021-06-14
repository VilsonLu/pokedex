import api from './HttpService';

export default class PokemonAPI {

    static getPokemons(): Promise<any> {
        return api.get('pokemon?limit=151');
    }
}