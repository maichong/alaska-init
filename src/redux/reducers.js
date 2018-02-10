import { combineReducers } from 'redux';
import lastArticlesReducer from './lastArticles';

export default combineReducers({
  lastArticles: lastArticlesReducer
});
