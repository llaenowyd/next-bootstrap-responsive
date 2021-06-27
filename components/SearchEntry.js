import React from 'react'

import FormControl from 'react-bootstrap/FormControl'

import useMovieSearch from '../hooks/useMovieSearch'

import styles from '../styles/SearchEntry.module.css'

const SearchEntry = () => {
  const { searchEntry, setSearchEntry } = useMovieSearch()
  console.log('SearchEntry', searchEntry)

  const ref = React.useRef()

  React.useEffect(() => {
    ref.current.focus()
  }, [ref])

  return (
    <FormControl
      ref={ref}
      className={styles.searchEntry}
      type="text"
      size="sm"
      value={searchEntry}
      onChange={ev => {
        console.log('searchEntry onChange', ev.target.value)
        setSearchEntry(ev.target.value)
      }}
    />
  )
}

export default SearchEntry
