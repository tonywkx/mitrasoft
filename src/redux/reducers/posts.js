import { SET_POSTS, SORT_POSTS_BY_TITLE, SET_SEARCH, CLEAR_SEARCH } from "../constants";

const initialState = {
  latestPosts: [],
  sortByTitle: '',
  searchTerm: '',
  savedPosts: [],
};

const posts = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_POSTS: 
      return {
        ...state, 
        latestPosts: [...state.latestPosts, ...payload],
        savedPosts: [...state.latestPosts, ...payload]
      };
      case SORT_POSTS_BY_TITLE:
      return {
        ...state,
        sortByTitle: payload,
        latestPosts: [...state.latestPosts.reverse()],
      };

      case SET_SEARCH:
      return {
        ...state,
        searchTerm: payload,
        latestPosts: [...state.latestPosts.filter(item => item.title.includes(payload))]
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        searchTerm: '',
        latestPosts: [...state.savedPosts]
      };
    default: return state;
  }
};

export default posts;