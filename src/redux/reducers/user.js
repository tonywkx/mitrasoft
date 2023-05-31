import { SET_AUTHOR_ID } from "../constants";

const initialState = {
    user: [],
  };

  const user = (state = initialState, { type, payload }) => {
    switch (type) {
      case SET_AUTHOR_ID: 
        return {
          ...state, 
          user: [...state.user, ...payload],
        };
      default: return state;
    }
  };
  
  export default user;