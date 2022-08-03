import Link from 'next/link'
import { memo } from 'react'

import { formatIdPokemon } from 'utils/formatIdPokemon'

import { getPokemonImage } from 'utils/getPokemonImage'

import * as S from './styles'

const PokemonCard = ({ name, id, trigger }) => {
  const { pokemonImage } = getPokemonImage(id)

  const { formattedId } = formatIdPokemon(id)

  return (
    <li data-trigger={trigger}>
      <Link href={`/pokemon/${id}`}>
        <a>
          <S.Img alt={name} width={150} height={150} src={pokemonImage} />

          <span>{formattedId}</span>

          <S.PokeName>{name}</S.PokeName>
        </a>
      </Link>
    </li>
  )
}

export default memo(PokemonCard)
