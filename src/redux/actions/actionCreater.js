import { SET_POSTS } from "../constants";


  export const setLatestPosts = (payload) => ({
    type: SET_POSTS,
    payload,
  });