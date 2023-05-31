import { combineReducers } from 'redux';
import posts from './posts'
import errors from "./errors";
import loader from './loader';
import comments from './comments';
import user from './user';

const reducer = combineReducers({
  
  posts,
  loader,
  errors,
  comments,
  user
  
});

export default reducer;