import { SET_POSTS,
   GET_COMMENTS,
    SET_COMMENTS, 
    GET_USER_ID, 
    SET_USER_ID, 
    GET_USER_POSTS,
    SET_USER_POSTS} from "../constants";

  export const setLatestPosts = (payload) => ({
    type: SET_POSTS,
    payload,
  });

  export const getComments = () => ({
    type: GET_COMMENTS,
  });

  export const setComments = (payload) => ({
    type: SET_COMMENTS,
    payload
  });

  export const getUserId = (id) => ({
    type: GET_USER_ID,
    id
  });

  export const setUser = (payload) => ({
    type: SET_USER_ID,
    payload
  });



  export const getUserPosts =(id) => ({
    type: GET_USER_POSTS,
    id
  })

  export const setUserPosts =(payload) => ({
    type: SET_USER_POSTS,
    payload
  })

