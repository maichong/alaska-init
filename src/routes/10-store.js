import { createStore } from 'redux';
import rootReducers from '../redux/reducers';

export default function (router) {
  router.get('*', (ctx, next) => {
    ctx.state.store = createStore(rootReducers);
    return next();
  });
}
