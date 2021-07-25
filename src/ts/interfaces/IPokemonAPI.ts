import Pokemon from '../Pokemon';
import SearchResult from '../SearchResult';

export default interface IPokemonAPI {
    getPokemonList(): Promise<SearchResult[]>
    getPokemon(pokemonURI: string): Promise<Pokemon> 
    searchPokemon(searchTerm: string): Promise<Pokemon[]>
}