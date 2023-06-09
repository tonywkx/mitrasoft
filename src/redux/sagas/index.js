import { takeEvery,  put, call, delay, select, spawn} from 'redux-saga/effects';
import { SET_LOADING_DATA, SET_POSTS_ERROR, GET_COMMENTS, GET_USER_ID, GET_USER_POSTS,  } from '../constants';
import { getPosts, getCommentsByIds, getUser, getUserPosts } from '../../api/index';
import { setLatestPosts, setComments, setUser, setUserPosts } from '../actions/actionCreater';

/* const getPostIds = (state) => state.posts.latestPosts.map((post) => post.id); */
/* const getPostsData = (state) => state.user.userPosts; */
const getCommentsData = (state) => state.comments.comments;

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


export function* comSaga(action){
  const { id } = action;
  /* const postIds = yield select(getPostIds); */
  /* const {data} = yield call(getCommentsByIds, id) */
  const commentsData = yield select(getCommentsData);
  if (commentsData && commentsData.length > 0){
    yield put(setComments([]));
  } else {
    const { data } = yield call(getCommentsByIds, id);
    yield put(setComments(data));
  }
}

export function* watchComSaga(){
  yield put({ type: SET_LOADING_DATA, payload: true });
  yield takeEvery(GET_COMMENTS, comSaga)
  yield put({ type: SET_LOADING_DATA, payload: false });
}




export function* userSaga(action) {
  const { id } = action;
  const data = yield call(getUser, id);
  let arr = Object.entries(data);
  yield put(setUser(arr[0]));
}

export function* watchGetUser() {
  yield takeEvery(GET_USER_ID, userSaga);
}

export function* userPosts(action){
  const { id } = action;
  yield delay(500);
  const {data} = yield call(getUserPosts, id)  
  yield put(setUserPosts(data));
}

export function* watchUserPosts(){
  yield put({ type: SET_LOADING_DATA, payload: true });
  yield takeEvery(GET_USER_POSTS, userPosts)
  yield put({ type: SET_LOADING_DATA, payload: false });
}

export default function* rootSaga() {
    yield watchPostsSaga();
    yield spawn(watchComSaga);
    yield spawn(watchGetUser);
    yield spawn(watchUserPosts);
}