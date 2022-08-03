/* eslint-disable no-unused-vars */
import Image from 'next/image'
import { useRouter } from 'next/router'

import { formatIdPokemon } from 'utils/formatIdPokemon'
import { getPokemonImage } from 'utils/getPokemonImage'

export default function Pokemon({ pokemon }) {
  const router = useRouter()

  if (router.isFallback) return <h1>loading...</h1>

  const { formattedId } = formatIdPokemon(pokemon.id)
  const { pokemonImage } = getPokemonImage(pokemon.id)

  return (
    <>
      <Image alt={pokemon.name} width={150} height={150} src={pokemonImage} />
      {pokemon.name}
      <br />
      {formattedId}
      <br />
    </>
  )
}

export async function getStaticProps({ params }) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_POKEMON_API}pokemon/${params?.id}`
  ).then((response) => response.json())

  const pokemon = {
    name: data.name,
    id: data.id
  }

  return {
    props: { pokemon }
  }
}

export async function getStaticPaths() {
  const max = 251

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_POKEMON_API}pokemon/?limit=${max}`
  ).then((response) => response.json())

  const paths = data.results.map((pokemon, index) => {
    return {
      params: { id: (index + 1).toString() }
    }
  })

  return {
    paths,
    fallback: true
  }
}
