import PokemonCard from 'components/PokemonCard'
import { useLoadPokemons } from 'hooks/useLoadPokemons'
import { formatIdPokemon } from 'utils/formatIdPokemon'

export default function Home({ pokemonList }) {
  const { pokemons } = useLoadPokemons(
    pokemonList.results,
    '[data-trigger="true"]'
  )

  return (
    <ul>
      <h1>Pokedex Test</h1>
      {pokemons.map(({ name }, index) => {
        const triggerInfiniteLoad = index === pokemons.length - 4
        const { formattedId } = formatIdPokemon(index + 1)

        return (
          <PokemonCard
            trigger={triggerInfiniteLoad}
            key={index}
            name={name}
            id={formattedId}
          />
        )
      })}
    </ul>
  )
}

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_POKEMON_API}pokemon/?offset=0&limit=20`
  )
  const pokemonList = await res.json()

  return { props: { pokemonList } }
}
