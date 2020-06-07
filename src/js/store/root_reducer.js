import { combineReducers } from 'redux'

import { getEntitiesModule } from './entities'
import { getReleasesModule } from './releases'

const rootReducer = combineReducers({
  ...getReleasesModule(),
  ...getEntitiesModule(),
})

export default rootReducer
