import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import css from './styles.module.scss'
import SearchIcon from '@components/icons/search'
import { service } from '@store/releases'

const SearchField = () => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')

  const handleChange = useCallback(({ target }) => {
    setQuery(target.value)
  }, [])

  const handleSearch = useCallback(() => {
    dispatch(service.searchAlbums({ query }))
  })

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <input
          type="text"
          placeholder="Start typing"
          className={css.input}
          onChange={handleChange}
          value={query}
        />
        <SearchIcon className={css.icon} />
      </div>
      <button type="button" className={css.button} onClick={handleSearch}>
        Search
      </button>
    </div>
  )
}

export default SearchField
