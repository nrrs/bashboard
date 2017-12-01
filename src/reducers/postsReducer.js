import {fetchPosts} from '../util/subs.util';

// ACTIONS
export const RECEIVE_POSTS = "RECEIVE_POSTS";

export const receivePosts = posts => ({type: RECEIVE_POSTS, posts});

export const requestPosts = (sub) => dispatch => {
    return fetchPosts(sub).then(res => dispatch(receivePosts(res.data.data.children)));
};

// REDUCER

const defaultState = () => ({});

export const PostsReducer = (state = defaultState(), action) => {
    Object.freeze(state);
    const copyState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_POSTS:
            return Object.assign(copyState, action.posts);
        default:
            return copyState;
    }
};