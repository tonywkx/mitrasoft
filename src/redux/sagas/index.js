import { /* takeEvery, */ put, call, delay } from 'redux-saga/effects';
import { SET_LOADING_DATA, SET_POSTS_ERROR } from '../constants';
import { getPosts } from '../../api/index';
import { setLatestPosts } from '../actions/actionCreater';


export function* workerSaga() {
  try{
    yield delay(500);
    const { data } = yield call(getPosts);
    yield put(setLatestPosts(data));
  } catch{
    yield put({ type: SET_POSTS_ERROR, payload: 'Error fetching posts' });
  }
    
}

export function* watchPostsSaga() {
  yield put({ type: SET_LOADING_DATA, payload: true });
  yield call(workerSaga);
  yield put({ type: SET_LOADING_DATA, payload: false });
}

export default function* rootSaga() {
  yield watchPostsSaga();
}