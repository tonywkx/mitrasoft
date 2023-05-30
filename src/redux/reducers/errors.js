import { SET_POSTS_ERROR} from "../constants";

const initialState = {
  latestPostsError: '',
  
};

const errors = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_POSTS_ERROR: 
      return {
        ...state, 
        latestPostsError: payload,
      };
    
    default: return state;
  }
};

export default errors;