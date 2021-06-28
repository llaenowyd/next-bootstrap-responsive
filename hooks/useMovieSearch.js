import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { useSWRInfinite } from 'swr'

import debounce from 'lodash.debounce'

import { selectors, actions } from '../store'

import { fetchMovieSearch } from '../requests/movieSearch'
import { getMovieSearchSwrKey } from './util'

const useMovieSearch = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const searchEntry = useSelector(selectors.searchEntry)
  const searchQuery = useSelector(selectors.searchQuery)

  const setSearchEntry = searchEntry =>
    dispatch(actions.setSearchEntry(searchEntry))

  const debouncedSetSearchQuery = React.useCallback(
    debounce(searchQuery => {
      ;(async () => {
        await dispatch(actions.setSearchQuery(searchQuery))

        const [targetSlug, targetPath] = searchQuery
          ? ['/[searchEntry]', `/${searchQuery}`]
          : ['/', '/']
        router.push(targetSlug, targetPath, { shallow: true })
      })()
    }, 500),
    [dispatch]
  )

  React.useEffect(() => {
    debouncedSetSearchQuery(searchEntry)
  }, [searchEntry])

  const { data, error, size, setSize } = useSWRInfinite(
    getMovieSearchSwrKey(searchQuery),
    fetchMovieSearch
  )

  const isEmpty = data?.[0]?.results.length === 0
  const results =
    error || !data?.[0]?.results?.length
      ? []
      : data.flatMap(page => page.results)
  const sizeAvailable = error || !data ? 0 : data[0]?.total_pages

  const loadingInitial =
    !!searchQuery && results.length === 0 && !isEmpty && !error
  const loadingMore =
    loadingInitial ||
    (!isEmpty && size > 0 && !!data && typeof data[size - 1] === 'undefined')

  const loadMore = size === sizeAvailable ? null : () => setSize(size + 1)

  return {
    searchEntry,
    setSearchEntry,
    searchQuery,
    loadingInitial,
    loadingMore,
    results,
    loadMore,
    sizeAvailable,
    size,
    error,
  }
}

export default useMovieSearch
