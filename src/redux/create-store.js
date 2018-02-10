import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

/**
 * 创建store
 * @param rootReducer
 * @param rootSaga
 * @returns {*}
 */
export default function (rootReducer, rootSaga) {
  const middleware = [];

  // saga中间件
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  if (process.env.NODE_ENV === 'development') {
    // log中间件
    middleware.push(createLogger());
  }

  const store = createStore(rootReducer, applyMiddleware(...middleware));

  // kick off root saga
  sagaMiddleware.run(rootSaga);

  setTimeout(() => store.dispatch({ type: 'LAUNCH' }));

  return store;
}
