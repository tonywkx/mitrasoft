import { SET_COMMENTS } from "../constants";

const initialState = {
    comments: [],

  };

  const comments = (state = initialState, { type, payload }) => {
    switch (type) {
      case SET_COMMENTS: 
        return {
          ...state, 
          comments: [...initialState.comments, ...payload],
          
        };
      default: return state;
    }
  };
  
  export default comments;