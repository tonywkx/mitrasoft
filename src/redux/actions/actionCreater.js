import { SET_POSTS,
   GET_COMMENTS,
    SET_COMMENTS, 
    GET_USER_ID, 
    SET_USER_ID, 
    GET_USER_POSTS,
    SET_USER_POSTS,
    SORT_POSTS_BY_TITLE, 
    SET_SEARCH, 
    CLEAR_SEARCH,
    SET_PAGE} from "../constants";

  export const setLatestPosts = (payload) => ({
    type: SET_POSTS,
    payload,
  });

  export const getComments = (id) => ({
    type: GET_COMMENTS,
    id
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


  export const sortPostsByTitle = (sortDirection) => {
    return {
      type: SORT_POSTS_BY_TITLE,
      payload: sortDirection
    };
  };


  export const setSearch = (searchTerm) => {
    return {
      type: SET_SEARCH,
      payload: searchTerm,
    };
  };
  
  export const clearSearch = () => {
    return {
      type: CLEAR_SEARCH,
    };
  };



  export const setPage = (page) => {
    return {
      type: SET_PAGE,
      payload: page,
    };
  };