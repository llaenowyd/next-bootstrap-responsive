const isProd = process.NODE_ENV === 'production'
const imagesBaseUrlField = isProd ? 'secure_base_url' : 'base_url'

const intendedPosterSize = 'original'
const getPosterSize = posterSizes =>
  posterSizes?.indexOf(intendedPosterSize) >= 0
    ? intendedPosterSize
    : posterSizes?.length > 0
    ? posterSizes[posterSizes.length - 1]
    : ''

export default {
  searchEntry: state => state.searchEntry,
  searchQuery: state => state.searchQuery,
  apiConfig: state => state.apiConfig,
  imagesBaseUrl: state => state.apiConfig?.images?.[imagesBaseUrlField],
  posterSize: state => getPosterSize(state.apiConfig?.images?.poster_sizes),
}
