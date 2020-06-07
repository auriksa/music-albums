import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './root_reducer'

const composeEnhancers =
  typeof window !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose
const middleware = composeEnhancers(applyMiddleware(thunk))

export const store = createStore(rootReducer, middleware)
