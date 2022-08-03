export const formatIdPokemon = (id) => {
  const formattedId = ('000' + id).slice(-3)
  return { formattedId }
}
