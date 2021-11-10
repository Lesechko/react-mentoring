export const getMoviesSearhQuery = (query: Record<string, string>) => {
  const searchBy = { searchBy: 'title' }
  const params = { ...query, ...searchBy }
  return Object.entries(params)
    .filter((query) => query[1])
    .reduce((res, param, idx) => {
      return (
        res +
        (idx !== 0 ? `&${param[0]}=${param[1]}` : `${param[0]}=${param[1]}`)
      )
    }, '?')
}
