import PokemonCard from 'components/PokemonCard'
import { useLoadPokemons } from 'hooks/useLoadPokemons'

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

        return (
          <PokemonCard
            trigger={triggerInfiniteLoad}
            key={index}
            name={name}
            id={index + 1}
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
