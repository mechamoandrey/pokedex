import PokemonCard from 'components/PokemonCard'

export default function Home({ pokemonList }) {
  // eslint-disable-next-line no-unused-vars
  const pokemons = pokemonList.results

  return (
    <ul>
      {pokemons.map(({ name }, index) => (
        <PokemonCard key={name} name={name} id={index + 1} />
      ))}
    </ul>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
  const pokemonList = await res.json()

  return { props: { pokemonList } }
}
