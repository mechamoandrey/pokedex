import Link from 'next/link'

import { getPokemonImage } from 'utils/getPokemonImage'

import * as S from './styles'

const PokemonCard = ({ name, id, trigger }) => {
  const { pokemonImage } = getPokemonImage(id)

  return (
    <li data-trigger={trigger}>
      <Link href={`/pokemon/${name}`}>
        <a>
          <S.Img alt={name} width={150} height={150} src={pokemonImage} />

          <span>{id}</span>

          <S.PokeName>{name}</S.PokeName>
        </a>
      </Link>
    </li>
  )
}

export default PokemonCard
