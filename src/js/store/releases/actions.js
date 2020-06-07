import { createAction } from 'redux-actions'
import { NAME } from './constants'

const createActionName = (action) => `${NAME}/${action}`

export const setReleases = createAction(createActionName('SET_RELEASES'))
export const setSearchedReleases = createAction(createActionName('SET_SEARCHED_RELEASES'))
