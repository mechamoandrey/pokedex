import { formatIdPokemon } from './formatIdPokemon'

export const getPokemonImage = (id) => {
  const { formattedId } = formatIdPokemon(id)

  const pokemonImage = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formattedId}.png`

  return { pokemonImage }
}
