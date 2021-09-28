import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware, createStore } from 'redux'
import { rootReducer, rootSaga } from '@/presentation/redux'

const configStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  let middlewares
  const storeEnhancer = applyMiddleware(sagaMiddleware)
  if (process.env.NODE_ENV === 'development') {
    middlewares = composeWithDevTools(storeEnhancer)
  }

  const store = createStore(rootReducer, middlewares || storeEnhancer)
  sagaMiddleware.run(rootSaga)
  return store
}

type RootState = ReturnType<typeof rootReducer>
export { configStore, RootState }
