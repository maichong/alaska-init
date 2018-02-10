import createStore from './create-store';
import rootSaga from '../sagas';
import reducers from './reducers';

const store = createStore(reducers, rootSaga);

export default store;
