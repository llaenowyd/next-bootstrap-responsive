import { getMovieSearchSwrKey } from '../../hooks/util'

describe('getMovieSearchSwrKey', () => {
  it('returns a string with the searchQuery and page', () => {
    const index = 123
    const page = 124
    const searchQuery = 'a search query'

    const result = getMovieSearchSwrKey(searchQuery)(index)

    const parse = JSON.parse(result)

    expect(parse).toEqual([searchQuery, page])
  })
})
