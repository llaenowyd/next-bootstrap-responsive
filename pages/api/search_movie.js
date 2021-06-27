import qs from 'query-string'

import runCorsMiddleware from '../../api_lib/runCorsMiddleware'

const apiUrl = process.env.API_URL
const apiHost = process.env.API_HOST
const apiSearchEndpoint = process.env.API_SEARCH_ENDPOINT
const authTokenV3 = process.env.AUTH_TOKEN_V3

const handler = async (req, res) => {
  await runCorsMiddleware(req, res)

  let search = qs.stringify({ ...req.query, api_key: authTokenV3 })

  const response = await fetch(`${apiUrl}${apiSearchEndpoint}?${search}`, {
    headers: { ...req.headers, host: apiHost },
    method: req.method,
  })

  const content = await response.json()

  if (!response.ok) {
    console.error(
      `Error response from ${apiUrl} ${apiSearchEndpoint}: ${
        response.status
      } ${JSON.stringify(content)}`
    )
  }

  res.status(response.status)
  res.send(JSON.stringify(content))
}

export default handler
