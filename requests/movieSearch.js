import qs from 'query-string'

export const makeUrl = (query, index) => {
  const page = index + 1

  return `/api/search_movie?${qs.stringify({
    query,
    page,
  })}`
}

export const fetchMovieSearch = async key => {
  const [query, page] = JSON.parse(key)

  if (!query) return null

  const res = await fetch(makeUrl(query, page))

  const content = await res.json()

  if (!res.ok) {
    throw new Error(content?.status_message ?? content)
  }

  return content
}
