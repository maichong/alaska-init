import { takeLatest } from 'redux-saga/effects';
import launchSaga from './launch';
import lastArticlesSaga from './lastArticles';
import { LAST_ARTICLES_REQUEST } from '../redux/lastArticles';

export default function* rootSaga() {
  yield [
    takeLatest('LAUNCH', launchSaga),
    takeLatest(LAST_ARTICLES_REQUEST, lastArticlesSaga)
  ];
}
