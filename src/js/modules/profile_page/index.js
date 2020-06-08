import React from 'react'
import { useSelector } from 'react-redux'
import AlbumsList from '@components/albums_list'
import { selectors } from '@store/releases'

const ProfilePage = () => {
  const likedAlbums = useSelector(selectors.likedReleasesSelector)

  return (
    <>
      <h2>Liked albums</h2>
      <AlbumsList albums={likedAlbums} />
    </>
  )
}

export default ProfilePage
