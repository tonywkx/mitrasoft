import { takeEvery, put, call, delay, select } from 'redux-saga/effects';
import { SET_LOADING_DATA, SET_POSTS_ERROR, GET_COMMENTS } from '../constants';
import { getPosts, getCommentsByIds } from '../../api/index';
import { setLatestPosts, setComments } from '../actions/actionCreater';

const getPostIds = (state) => state.posts.latestPosts.map((post) => post.id);

export function* workerSaga() {
  try{
    yield delay(500);
    const { data } = yield call(getPosts);
    yield put(setLatestPosts(data));
  } catch{
    yield put({ type: SET_POSTS_ERROR, payload: 'Error fetching posts' });
  }
}

export function* comSaga(){
  const postIds = yield select(getPostIds);
  const comments = yield call(getCommentsByIds, postIds)
  yield put(setComments(comments))
}

export function* watchComSaga(){
  yield put({ type: SET_LOADING_DATA, payload: true });
  yield takeEvery(GET_COMMENTS, comSaga)
  yield put({ type: SET_LOADING_DATA, payload: false });
}

export function* watchPostsSaga() {
  yield put({ type: SET_LOADING_DATA, payload: true });
  yield call(workerSaga);
  yield put({ type: SET_LOADING_DATA, payload: false });
}

export default function* rootSaga() {
  yield watchPostsSaga();
  yield watchComSaga();
}