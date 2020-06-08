import { handleActions } from 'redux-actions'
import * as actions from './actions'
// import { getLikedAlbums } from 'js/utils'

/* TODO: initial state for likedIds will be from store
* but needs an additional request to get releases
* which were liked, so I set an empty array
*/
const initialReleasesState = {
  ids: [],
  searchedIds: [],
  // likedIds: getLikedAlbums(),
  likedIds: [],
}

const releasesReducer = handleActions(
  {
    [actions.setReleases]: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      }
    },
    [actions.setSearchedReleases]: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      }
    },
    [actions.addLikedReleases]: (state, { payload: nextId }) => {
      const { likedIds: prevIds } = state
      const likedIds = [...new Set([...prevIds, nextId])]
      localStorage.setItem('liked', JSON.stringify(likedIds))
      return {
        ...state,
        likedIds,
      }
    },
    [actions.removeLikedReleases]: (state, { payload: removedId }) => {
      const { likedIds: prevIds } = state
      const likedIds = prevIds.filter((id) => id !== removedId)
      localStorage.setItem('liked', JSON.stringify(likedIds))
      return {
        ...state,
        likedIds,
      }
    },
  },
  initialReleasesState
)

export default releasesReducer
