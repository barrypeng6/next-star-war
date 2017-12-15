import rootSaga from './saga'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'

const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
// 初始化 Redux store
// On the server-side the Redux store is a new instance with every request. 
const initializeStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers( applyMiddleware(sagaMiddleware) )
  )
  sagaMiddleware.run(rootSaga)
  return store
}

export default initializeStore