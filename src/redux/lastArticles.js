import { createAction, handleActions } from 'redux-actions';
import immutable from 'seamless-immutable';

/**
 * Action Types
 */
export const LAST_ARTICLES_REQUEST = 'LAST_ARTICLES_REQUEST';
export const LAST_ARTICLES_SUCCESS = 'LAST_ARTICLES_SUCCESS';
export const LAST_ARTICLES_FAILURE = 'LAST_ARTICLES_FAILURE';
export const APPLY_LAST_ARTICLES = 'APPLY_LAST_ARTICLES';

// Action Creators

/**
 * Apply Articles
 * @param {Article[]} articles
 */
export const applyLastArticles = createAction(APPLY_LAST_ARTICLES);

/**
 * Request Articles
 * @param {number} [cat]
 */
export const lastArticlesRequest = createAction(LAST_ARTICLES_REQUEST, (cat) => ({ cat }));

/**
 * Request Articles Successfully
 * @param {Object}    options
 * @param {number}    [options.cat]
 * @param {Article[]} options.articles
 */
export const lastArticlesSuccess = createAction(LAST_ARTICLES_SUCCESS);

/**
 * Request Articles Failed
 * @param {Error} error
 */
export const lastArticlesFailure = createAction(LAST_ARTICLES_FAILURE);

// initial state
export const INITIAL_STATE = immutable({
  error: null,
  fetching: false,
  cat: null,
  articles: []
});

/**
 * Reducers
 */
export default handleActions({
  APPLY_LAST_ARTICLES: (state, { payload }) => state.merge({
    fetching: false,
    error: null,
    articles: payload
  }),
  LAST_ARTICLES_REQUEST: (state, { payload }) => state.merge({
    fetching: true,
    cat: payload.cat || null
  }),
  LAST_ARTICLES_SUCCESS: (state, { payload }) => state.merge({
    fetching: false,
    error: null,
    cat: payload.cat,
    articles: payload.articles
  }),
  LAST_ARTICLES_FAILURE: (state, { payload }) => state.merge({ fetching: false, error: payload.message })
}, INITIAL_STATE);

