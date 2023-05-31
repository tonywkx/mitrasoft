import { SET_POSTS, GET_COMMENTS, SET_COMMENTS } from "../constants";


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