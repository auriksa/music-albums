import { NAME } from './constants'
const getAll = (state) => state[NAME]
export const getAllWithName = (entityName, state) => getAll(state)[entityName] || {}
