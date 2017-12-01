import Axios from 'axios';
const URL = 'https://www.reddit.com/r';

export const fetchPosts = (sub) => Axios.get(`${URL}/${sub}.json`);
