import mockApiConfig from '../mocks/api_config.json'

export const mockFetchApiConfig = () =>
  new Promise(resolve => {
    setTimeout(() => resolve(mockApiConfig), 1500)
  })

export const fetchApiConfig = async () => {
  const res = await fetch('/api/api_config')

  const content = await res.json()

  if (!res.ok) {
    throw new Error(content?.status_message ?? content)
  }

  return content
}
