export const getMovieSearchSwrKey = searchQuery => index => {
  const page = index + 1
  return JSON.stringify([searchQuery, page])
}
