import { INCREASE_COUNT, DECREASE_COUNT,GET_POSTS, SET_POSTS } from "../constants";

export const increaseCount = () => ({
  type: INCREASE_COUNT,
});

export const decreaseCount = () => ({
  type: DECREASE_COUNT,
});

export const getLatestNews = () => ({
    type: GET_POSTS,
  });

  export const setLatestPosts = (payload) => ({
    type: SET_POSTS,
    payload,
  });