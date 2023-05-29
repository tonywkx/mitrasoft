import { takeEvery, put, call } from 'redux-saga/effects';
import { GET_POSTS } from '../constants';
import { getPosts } from '../../api/index';
import { setLatestPosts } from '../actions/actionCreater';


export function* workerSaga() {
    const { data } = yield call(getPosts);
    yield put(setLatestPosts(data));
}

export function* watchClickSaga() {
  yield takeEvery(GET_POSTS, workerSaga);
}

export default function* rootSaga() {
  yield watchClickSaga();
}