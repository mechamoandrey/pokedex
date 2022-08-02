import * as S from './styles'

const PokemonCard = ({ name, id, trigger }) => {
  return (
    <div data-trigger={trigger}>
      <S.Img
        alt={name}
        width={150}
        height={150}
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(
          '000' + id
        ).slice(-3)}.png`}
      />

      {/* <S.Button>{('000' + id).slice(-3)}</S.Button> */}

      <S.PokeName>{name}</S.PokeName>
    </div>
  )
}

export default PokemonCard
