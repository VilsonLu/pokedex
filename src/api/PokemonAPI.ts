import api from './HttpService';

export default class PokemonAPI {

    public static getPokemons(): Promise<any> {
        return api.get('pokemon?limit=151');
    }
}