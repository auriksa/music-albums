import React from 'react'
import { useSelector } from 'react-redux'
import SearchField from '@components/search_field'
import AlbumList from '@components/albums_list'
import { selectors } from '@store/releases'

const SearchPage = () => {
  const searchedReleases = useSelector(selectors.searchedReleasesSelector)

  return (
    <>
      <SearchField />
      <AlbumList albums={searchedReleases} withControls={false} />
    </>
  )
}

export default SearchPage
