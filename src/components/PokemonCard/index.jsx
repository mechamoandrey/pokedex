import Image from 'next/image'

const PokemonCard = ({ name, id }) => {
  return (
    <div>
      <span>{('000' + id).slice(-3)}</span>
      <Image
        alt={name}
        width={150}
        height={150}
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(
          '000' + id
        ).slice(-3)}.png`}
      />
      <h2>{name}</h2>
    </div>
  )
}

export default PokemonCard
