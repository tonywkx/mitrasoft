import axios from 'axios';

export const getPosts = async () => {
    const res = axios.get('https://jsonplaceholder.typicode.com/posts');
    return  await res;
  };