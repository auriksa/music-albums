import React, { memo, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectors } from '../../store/artists'
import { getLikedAlbums } from 'js/utils'
import css from './styles.module.scss'
import HeartIcon from '../icons/heart'
import HeartBrokenIcon from '../icons/heart_broken'

const PLACEHOLDER_URL = 'https://via.placeholder.com/250x150.jpg'

const Album = memo(({ title, secondaryTypes, artistCredit, id, isLiked, withControls }) => {
  const ids = artistCredit.map(({ artist: ids }) => ids)
  const artists = useSelector(selectors.artistsByIdsSelector(ids))
  const [liked, setLiked] = useState(isLiked)

  /*
   * TODO: rethink this logic, localStorage usage should be in useEffect
   * */
  const handleLiked = useCallback(() => {
    const liked = getLikedAlbums()
    liked.push(id)
    localStorage.setItem('liked', JSON.stringify([...new Set(liked)]))
    setLiked(true)
  })

  const handleDisliked = useCallback(() => {
    const liked = getLikedAlbums()
    localStorage.setItem('liked', JSON.stringify(liked.filter((i) => i === id)))
    setLiked(false)
  })

  return (
    <div className={css.item}>
      <div className={css.imageContainer}>
        <img src={`${PLACEHOLDER_URL}?text=${title}`} />
        {withControls && (
          <div className={css.controls}>
            {liked ? (
              <HeartBrokenIcon className={css.icon} onClick={handleDisliked} />
            ) : (
              <HeartIcon className={css.icon} onClick={handleLiked} />
            )}
          </div>
        )}
      </div>
      <div className={css.info}>
        <b>TITLE:</b> {title}
        <br />
        {secondaryTypes?.join(', ')}
        <br />
        <b>Artists Credit:</b>
        {artists.map((item) => item.name).join(', ')}
      </div>
    </div>
  )
})

const AlbumsList = ({ albums, withControls = true }) => {
  const liked = getLikedAlbums()

  return (
    <div className={css.container}>
      {albums.map((item) => {
        const isLiked = liked.indexOf(item.id) !== -1
        return <Album key={item.id} {...item} isLiked={isLiked} withControls={withControls} />
      })}
    </div>
  )
}

export default AlbumsList
