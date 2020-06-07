export * as constants from './constants'
export * as actions from './actions'
export * as selectors from './selectors'
export * as service from './service'

import { NAME } from './constants'
import reducer from './reducer'

export const getReleasesModule = () => ({ [NAME]: reducer })
