import { handleActions } from 'redux-actions'
import * as actions from './actions'

const initialReleasesState = {
  ids: [],
  searchedIds: [],
}

/* TODO: need to use Set for remove duplicates
 *  but now I set items only once and rewrite search - so it works.
 * When add a additional request to get liked releases - Set is required
 */
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
  },
  initialReleasesState
)

export default releasesReducer
