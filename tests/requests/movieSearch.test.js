import { fetchMovieSearch, makeUrl } from '../../requests/movieSearch'

describe('makeUrl', () => {
  it('returns the lambda path with query and page', () => {
    const query = 'this is a query'
    const index = 123
    const page = 124

    const result = makeUrl(query, index)

    const [resultPath, resultQuery] = result.split('?')
    const queryTerms = resultQuery.split('&')

    expect(resultPath).toEqual(`/api/search_movie`)
    expect(queryTerms).toHaveLength(2)
    expect(queryTerms).toContain(`page=${page}`)
    expect(queryTerms).toContain(`query=${query.replace(/ /g, '%20')}`)
  })
})

describe('fetchMovieSearch', () => {
  global.fetch = jest.fn()

  const makeKey = (query, page) => JSON.stringify([query, page])
  const query = 'a search query'
  const page = 123
  const key = makeKey(query, page)

  const responseContent = { response: 'content' }
  const errorContent = { status_message: 'bad news' }

  const mockResponse = {
    ok: true,
    json: () => Promise.resolve(responseContent),
  }

  const mockBadResponse = {
    ok: false,
    json: () => Promise.resolve(errorContent),
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('returns null when query is false', () => {
    expect(fetchMovieSearch(makeKey('', 123))).resolves.toBeNull()
  })

  it('returns content when successful', async () => {
    global.fetch.mockImplementation(() => Promise.resolve(mockResponse))

    flushPromises()
    const result = await fetchMovieSearch(key)

    expect(result).toEqual(responseContent)
  })

  it('throws on bad response', async () => {
    global.fetch.mockImplementation(() => Promise.resolve(mockBadResponse))

    await flushPromises()

    expect(fetchMovieSearch(key)).rejects.toEqual(
      Error(errorContent.status_message)
    )
  })
})
