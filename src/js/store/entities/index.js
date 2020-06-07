import { NAME } from './constants'
import reducer from './reducer'

export * as constants from './constants'
export * as actions from './actions'
export * as selectors from './selectors'

export const getEntitiesModule = () => ({ [NAME]: reducer })

// export default {
//   actions: { merge: createAction('ENTITIES/MERGE') },
//   selectors: { getAllWithName: (entityName, state) => getAll(state)[entityName] || {} },
// }
