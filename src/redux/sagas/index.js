import { takeEvery } from 'redux-saga/effects';
import { GET_POSTS } from '../constants';
import { getPosts } from '../../api/index';

export function* workerSaga() {
  const data = yield getPosts();
  console.log(data);
}

export function* watchClickSaga() {
  yield takeEvery(GET_POSTS, workerSaga);
}

export default function* rootSaga() {
  yield watchClickSaga();
}