import { combineReducers } from 'redux';
import posts from './posts'
import errors from "./errors";
import loader from './loader';

const reducer = combineReducers({
  
  posts,
  loader,
  errors,
  
});

export default reducer;