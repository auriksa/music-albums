import React, { memo, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectors as artistsSelector } from '@store/artists'
import { actions as releasesActions, selectors as releasesSelector } from '@store/releases'
import css from './styles.module.scss'
import HeartIcon from '../icons/heart'
import HeartBrokenIcon from '../icons/heart_broken'

const PLACEHOLDER_URL = 'https://via.placeholder.com/250x150.jpg'

const Album = memo(({ title, secondaryTypes, artistCredit, id, isLiked, withControls }) => {
  const dispatch = useDispatch()
  const ids = artistCredit.map(({ artist: ids }) => ids)
  const artists = useSelector(artistsSelector.artistsByIdsSelector(ids))

  const handleLiked = useCallback(() => {
    dispatch(releasesActions.addLikedReleases(id))
  })

  const handleDisliked = useCallback(() => {
    dispatch(releasesActions.removeLikedReleases(id))
  })

  return (
    <div className={css.item}>
      <div className={css.imageContainer}>
        <img src={`${PLACEHOLDER_URL}?text=${title}`} />
        {withControls && (
          <div className={css.controls}>
            {isLiked ? (
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
  const likedIds = useSelector(releasesSelector.likedReleasesIdsSelector)

  return (
    <div className={css.container}>
      {albums.map((item) => {
        const isLiked = likedIds.indexOf(item.id) !== -1
        return <Album key={item.id} {...item} isLiked={isLiked} withControls={withControls} />
      })}
    </div>
  )
}

export default AlbumsList
