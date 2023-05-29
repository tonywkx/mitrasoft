import { SET_POSTS } from "../constants";

const initialState = {
  latestPosts: [],
};

const news = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_POSTS: 
      return {
        ...state, 
        latestPosts: [...state.latestPosts, ...payload],
      };
    default: return state;
  }
};

export default news;