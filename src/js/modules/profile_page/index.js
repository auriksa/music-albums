import React from 'react'
import { useSelector } from 'react-redux'
import AlbumsList from '@components/albums_list'
import { getLikedAlbums } from 'js/utils'
import { selectors } from '@store/releases'

const ProfilePage = () => {
  const liked = getLikedAlbums()
  const likedAlbums = useSelector(selectors.releasesById(liked))

  return (
    <>
      <h2>Liked albums</h2>
      <AlbumsList albums={likedAlbums} withControls={false} />
    </>
  )
}

export default ProfilePage
