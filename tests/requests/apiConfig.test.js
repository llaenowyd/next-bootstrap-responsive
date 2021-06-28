import { fetchApiConfig } from '../../requests/apiConfig'

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

global.fetch = jest.fn()

describe('fetchApiConfig', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('fetches the api config lambda', async () => {
    global.fetch.mockImplementation(() => Promise.resolve(mockResponse))

    await flushPromises()

    const result = await fetchApiConfig()

    expect(global.fetch.mock.calls).toEqual([['/api/api_config']])
    expect(result).toEqual(responseContent)
  })

  it('throws when response is bad', async () => {
    global.fetch.mockImplementation(() => Promise.resolve(mockBadResponse))

    await flushPromises()

    expect(fetchApiConfig()).rejects.toEqual(Error(errorContent.status_message))
  })
})
