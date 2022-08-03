import Image from 'next/image'
import { formatIdPokemon } from 'utils/formatIdPokemon'
import { getPokemonImage } from 'utils/getPokemonImage'

export default function Pokemon({ basePokemon, pokemonSpecie }) {
  const { pokemonImage } = getPokemonImage(basePokemon.id)
  const { formattedId } = formatIdPokemon(basePokemon.id)

  return (
    <>
      <Image
        alt={basePokemon.name}
        width={150}
        height={150}
        src={pokemonImage}
      />
      {basePokemon.name}
      <br />
      {formattedId}
      <br />
      {pokemonSpecie.flavor_text_entries[0].flavor_text}
      <br />
      type
      {basePokemon.types.map((item) => {
        return <li key={item.slot}>{item.type.name}</li>
      })}
    </>
  )
}

export async function getServerSideProps(context) {
  const resBasePokemon = await fetch(
    `${process.env.NEXT_PUBLIC_POKEMON_API}pokemon/${context.query.name}`
  )
  const basePokemon = await resBasePokemon.json()

  const resPokemonSpecie = await fetch(
    `${process.env.NEXT_PUBLIC_POKEMON_API}pokemon-species/${basePokemon.id}`
  )

  const pokemonSpecie = await resPokemonSpecie.json()

  return { props: { basePokemon, pokemonSpecie } }
}
