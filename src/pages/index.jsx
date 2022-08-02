/* eslint-disable no-undef */
import PokemonCard from 'components/PokemonCard'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Home({ pokemonList }) {
  const [pokemons, setPokemons] = useState(pokemonList.results)
  const [apiEndpoint, setApiEndpoint] = useState(
    `${process.env.NEXT_PUBLIC_POKEMON_API}?offset=21&limit=10`
  )

  const loadPokemons = () => {
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        fetch(apiEndpoint).then(async (res) => {
          let { results, next } = await res.json()
          setApiEndpoint(next)
          setPokemons((prevPokemons) => [...prevPokemons, ...results])
          observer.disconnect()
        })
      }
    })

    observer.observe(document.querySelector('[data-trigger="true"]'))
  }

  useEffect(() => {
    loadPokemons()
  }, [pokemons])

  return (
    <ul>
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
    `${process.env.NEXT_PUBLIC_POKEMON_API}?offset=0&limit=20`
  )
  const pokemonList = await res.json()

  return { props: { pokemonList } }
}
