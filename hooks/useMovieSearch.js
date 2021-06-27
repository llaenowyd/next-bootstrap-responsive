import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { useSWRInfinite } from 'swr'
import qs from 'query-string'

import debounce from 'lodash.debounce'

import { selectors, actions } from '../store'

const makeUrl = (query, index) => {
  const page = index + 1

  return `/api/search_movie?${qs.stringify({
    query,
    page,
  })}`
}

const fetcher = async key => {
  const [query, page] = JSON.parse(key)

  if (!query) return null

  const res = await fetch(makeUrl(query, page))

  const content = await res.json()

  if (!res.ok) {
    throw new Error(content?.status_message ?? content)
  }

  return content
}

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

  const getSwrKey = index => {
    const page = index + 1
    return JSON.stringify([searchQuery, page])
  }

  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    getSwrKey,
    fetcher
  )

  const results =
    error || !data?.[0]?.results?.length
      ? []
      : data.flatMap(page => page.results)
  const sizeAvailable = error || !data ? 0 : data[0]?.total_pages

  const loadingInitial = !!searchQuery && results.length === 0 && !error
  const loadingMore =
    loadingInitial ||
    (size > 0 && !!data && typeof data[size - 1] === 'undefined')

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
