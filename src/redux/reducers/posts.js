import { SET_POSTS, SORT_POSTS_BY_TITLE } from "../constants";

const initialState = {
  latestPosts: [],
  sortByTitle: '',
};

const posts = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_POSTS: 
      return {
        ...state, 
        latestPosts: [...state.latestPosts, ...payload],
      };
      case SORT_POSTS_BY_TITLE:
      return {
        ...state,
        sortByTitle: payload,
        latestPosts: [...state.latestPosts.reverse()],
      };
    default: return state;
  }
};

export default posts;