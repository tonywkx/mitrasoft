import { takeEvery, put, call, delay, select } from 'redux-saga/effects';
import { SET_LOADING_DATA, SET_POSTS_ERROR, GET_COMMENTS, GET_AUTHOR_ID, /* SET_AUTHOR_ID */ } from '../constants';
import { getPosts, getCommentsByIds, getUser } from '../../api/index';
import { setLatestPosts, setComments, setUser } from '../actions/actionCreater';

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

export function* watchPostsSaga() {
  yield put({ type: SET_LOADING_DATA, payload: true });
  yield call(workerSaga);
  yield put({ type: SET_LOADING_DATA, payload: false });



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



function* fetchAuthorData(action) {
  const authorId = action.payload
  const authorData = yield call(getUser, authorId);
  yield put(setUser(authorData));
}

export function* watchGetAuthorId() {
  yield takeEvery(GET_AUTHOR_ID, fetchAuthorData);
}



export default function* rootSaga() {
  yield watchPostsSaga();
  yield watchComSaga();
  yield watchGetAuthorId();
  
}