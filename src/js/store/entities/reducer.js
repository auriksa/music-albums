import { handleActions } from 'redux-actions'
import * as actions from './actions'
import * as utils from './utils'

const entitiesReducer = handleActions(
  {
    [actions.merge]: (state, { payload }) => {
      return utils.mergeWithArrayReplacement({}, state, payload)
    },
  },
  {}
)

export default entitiesReducer
