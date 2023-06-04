import { SET_USER_ID, SET_USER_POSTS } from "../constants";

const initialState = {
    user: [],
    userPosts: [],
  };

  const user = (state = initialState, { type, payload }) => {
    switch (type) {
      case SET_USER_ID: 
        return {
          ...state, 
          user: [...initialState.user, ...payload],
        };
        case SET_USER_POSTS: 
        return {
          ...state, 
          userPosts: [...initialState.userPosts, ...payload],
        };
      default: return state;
    }
  };
  
  export default user;