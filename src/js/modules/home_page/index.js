import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AlbumList from '@components/albums_list'
import { selectors, service } from '@store/releases'

const HomePage = () => {
  const dispatch = useDispatch()
  const releases = useSelector(selectors.releasesSelector)

  useEffect(() => {
    dispatch(service.getAlbums())
  }, [dispatch])

  return (
    <>
      <h1>List of albums</h1>
      <AlbumList albums={releases} />
    </>
  )
}

export default HomePage
