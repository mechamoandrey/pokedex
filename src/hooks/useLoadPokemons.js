import { useEffect, useState } from 'react'
import isClient from 'utils/isClient'

export const useLoadPokemons = (listPokemons, target) => {
  const [pokemons, setPokemons] = useState(listPokemons)

  const [apiEndpoint, setApiEndpoint] = useState(
    `${process.env.NEXT_PUBLIC_POKEMON_API}pokemon/?offset=21&limit=20`
  )

  const loadPokemons = () => {
    console.log('loadpokemon')
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        console.log('ifzao')
        fetch(apiEndpoint)
          .then(async (res) => {
            const { results, next } = await res.json()
            setApiEndpoint(next)
            setPokemons((prevPokemons) => [...prevPokemons, ...results])
            observer.disconnect()
          })
          .catch((err) => {
            alert(err)
          })
      }
    })

    observer.observe(isClient() && document.querySelector(`${target}`))
  }

  useEffect(() => {
    loadPokemons()
  }, [pokemons])

  return { pokemons }
}
