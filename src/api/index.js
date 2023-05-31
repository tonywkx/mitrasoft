import axios from 'axios';

export const getPosts = async () => {
    const res = axios.get('https://jsonplaceholder.typicode.com/posts');
    return  await res;
  };

export const getComments = async () => {
  const res = axios.get(`https://jsonplaceholder.typicode.com/posts/1/comments`);
    return  await res;
}

export const getCommentsByIds = async (ids) => {
  try {
    const requests = ids.map((id) => axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`));

    const responses = await Promise.all(requests);

    const comments = responses.map((response) => response.data);

    return comments;
  } catch (error) {
    throw new Error('Failed to fetch comments');
  }
};