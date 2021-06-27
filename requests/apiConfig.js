export const fetchApiConfig = async () => {
  const res = await fetch('/api/api_config')

  const content = await res.json()

  if (!res.ok) {
    throw new Error(content?.status_message ?? content)
  }

  return content
}
