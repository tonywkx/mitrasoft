/* eslint-disable no-extend-native */
import { SET_POSTS, SORT_POSTS_BY_TITLE, SET_SEARCH, CLEAR_SEARCH, SET_PAGE } from "../constants";

const initialState = {
  latestPosts: [],
  sortByTitle: '',
  searchTerm: '',
  savedPosts: [],
  currentPage: 1,
  chunkedPosts: [],
  openComments: {}
};

Array.prototype.chunk = function (chunkSize) {
  const array = this;
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    chunkedArray.push(chunk);
  }
  return chunkedArray;
};

const posts = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_POSTS: 
      return {
        ...state, 
        latestPosts: [...state.latestPosts, ...payload.chunk(10)[0]],
        savedPosts: [...state.latestPosts, ...payload],
        chunkedPosts: [...state.latestPosts, ...payload.chunk(10)]
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
        latestPosts: [...state.chunkedPosts[0]]
      };

      case SET_PAGE:
      return {
        ...state,
        currentPage: payload,
        latestPosts: [...state.chunkedPosts[payload - 1]]

      };
    default: return state;
  }
};

export default posts;