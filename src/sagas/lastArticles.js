import { put } from 'redux-saga/effects';
import akita from 'akita';
import { lastArticlesSuccess, lastArticlesFailure } from '../redux/lastArticles';

export default function* boardsSaga({ payload }) {
  try {
    let articles = yield akita('/api/articles/last').find().where('cat', payload.cat);
    yield put(lastArticlesSuccess({
      cat: payload.cat,
      articles
    }));
  } catch (error) {
    yield put(lastArticlesFailure(error));
  }
}
