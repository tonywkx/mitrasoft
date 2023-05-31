/* import { SEARCH_POSTS, CLEAR_SEARCH } from "../constants";

const initialState = {
    searchRes: [],
  };

  const comments = (state = initialState, { type, payload }) => {
    switch (type) {
      case SEARCH_POSTS: 
        return {
          ...state, 
          searchRes: state.searchRes.find(item => item === payload),
        };
        case CLEAR_SEARCH: 
        return {
          ...state
        };
      default: return state;
    }
  };
  
  export default comments; */