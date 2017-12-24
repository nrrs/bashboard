import {requestPosts} from '../util/api.util';

// ACTIONS
export const RECEIVE_POSTS = "RECEIVE_POSTS";

export const receivePosts = (posts, sub) => ({type: RECEIVE_POSTS, posts, sub});

export const fetchPosts = (sub) => dispatch => {
    return requestPosts(sub).then(res => {
        dispatch(receivePosts(res.data, sub));
    });
};

// REDUCER
const defaultState = () => ({});

export const PostsReducer = (state = defaultState(), action) => {
    Object.freeze(state);
    const copyState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_POSTS:
            if (!(action.sub in copyState)) {
                copyState[action.sub] = {};
            }
            action
                .posts
                .data
                .children
                .forEach(child => {
                    let post = {
                        author: child.data.author,
                        created_utc: child.data.created_utc,
                        downs: child.data.downs,
                        isVideo: child.data.is_video,
                        nsfw: child.data.over_18,
                        numComments: child.data.num_comments,
                        score: child.data.score,
                        thumbnail: child.data.thumbnail,
                        title: child.data.title,
                        ups: child.data.ups,
                        url: child.data.url
                    };
                    copyState[action.sub][child.data.name] = post;
                });

            return copyState;
        default:
            return copyState;
    }
};