export const PokemonTypeColor = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
	other: '#777777'
};

export const GetPokemonTypeColor = (pokemonType: string): string => {

	if(pokemonType == null)
		return PokemonTypeColor.other

	switch(pokemonType.toLowerCase()) {
		case 'normal': return PokemonTypeColor.normal
		case 'fire': return PokemonTypeColor.fire
		case 'water': return PokemonTypeColor.water
		case 'electric': return PokemonTypeColor.electric
		case 'grass': return PokemonTypeColor.grass
		case 'ice': return PokemonTypeColor.ice
		case 'fighting': return PokemonTypeColor.fighting
		case 'poison': return PokemonTypeColor.poison
		case 'ground': return PokemonTypeColor.ground
		case 'psychic': return PokemonTypeColor.psychic
		case 'bug': return PokemonTypeColor.bug
		case 'rock': return PokemonTypeColor.rock
		case 'ghost': return PokemonTypeColor.ghost
		case 'dragon': return PokemonTypeColor.dragon
		case 'steel': return PokemonTypeColor.steel
		case 'fairy': return PokemonTypeColor.fairy
		default: return PokemonTypeColor.other
	}
}



