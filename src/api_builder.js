export default function apiBuilder (state, queries) {
  const base = 'https://api.openweathermap.org/data/2.5/'.concat(state, '?')
  const queriesList = Object.entries(queries)

  const queryString = queriesList.reduce((acc, cur) => acc.concat(cur[0], '=', cur[1], '&'), '')

  return base.concat(queryString)
}
