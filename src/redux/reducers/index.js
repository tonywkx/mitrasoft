import { combineReducers } from 'redux';
import counter from "./counter";
import posts from './posts'

const reducer = combineReducers({
  counter,
  posts
  
});

export default reducer;