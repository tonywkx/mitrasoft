import { combineReducers } from 'redux';
import posts from './posts'
import errors from "./errors";
import loader from './loader';
import comments from './comments';

const reducer = combineReducers({
  
  posts,
  loader,
  errors,
  comments
  
});

export default reducer;