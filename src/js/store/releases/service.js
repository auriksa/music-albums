import { batch } from 'react-redux'
import Api from '../../api/MusicBrainsApi'
import { merge } from '../entities/actions'
import { actions } from './index'

export const getAlbums = () => (dispatch) => {
  return Api.list().then(({ normalized }) => {
    batch(() => {
      dispatch(merge(normalized.entities))
      dispatch(actions.setReleases({ ids: normalized.result }))
    })
  })
}

export const searchAlbums = (params) => (dispatch) => {
  return Api.search(params).then(({ normalized }) => {
    batch(() => {
      dispatch(merge(normalized.entities))
      dispatch(actions.setSearchedReleases({ searchedIds: normalized.result }))
    })
  })
}
