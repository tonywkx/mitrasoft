import { SET_POSTS, GET_COMMENTS, SET_COMMENTS, /* SEARCH_POSTS, CLEAR_SEARCH  */ GET_AUTHOR_ID, SET_AUTHOR_ID} from "../constants";


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

  export const getAuthorId = (authorId) => ({
    type: GET_AUTHOR_ID,
    payload: authorId,
  });

  export const setUser = (payload) => ({
    type: SET_AUTHOR_ID,
    payload
  });

  /* export const searchPosts = (payload) => ({
    type: SEARCH_POSTS,
    payload
  })
  
  export const clearSearch = () => ({
    type: CLEAR_SEARCH,
  }) */