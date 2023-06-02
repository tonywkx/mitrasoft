import axios from 'axios';

export const getPosts = async () => {
    const res = axios.get('https://jsonplaceholder.typicode.com/posts');
    return await res;
  };


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

export const getUser = async (id) => {
  const res = axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  return await res;
}

export const getUserPosts = async (id) => {
  const res = axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
  return await res;
}
