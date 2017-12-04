import Axios from 'axios';
const subURL = sub => `https://www.reddit.com/r/${sub}.json`;
const searchURL = query => `https://www.reddit.com/subreddits/search.json?q=${query.toLowerCase()}`;

export const requestPosts = sub => Axios.get(subURL(sub));
export const searchSubs = query => Axios.get(searchURL(query));