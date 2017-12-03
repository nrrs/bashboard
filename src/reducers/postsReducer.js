import {fetchPosts} from '../util/subs.util';

// ACTIONS
export const RECEIVE_POSTS = "RECEIVE_POSTS";

export const receivePosts = (posts, sub) => ({type: RECEIVE_POSTS, posts, sub});

export const requestPosts = (sub) => dispatch => {
    return fetchPosts(sub).then(res => {
        dispatch(receivePosts(res.data, sub));
        } 
    );
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
            action.posts.data.children.forEach(child => {
                let post = {
                    title: child.data.title,
                    author: child.data.author,
                    thumbnail: child.data.thumbnail,
                    nsfw: child.data.over_18,
                    score: child.data.score,
                    ups: child.data.ups,
                    downs: child.data.downs,
                    isVideo: child.data.is_video,
                    numComments: child.data.num_comments,
                    url: child.data.url
                };
                copyState[action.sub][child.data.name] = post;
            });

            return copyState;
        default:
            return copyState;
    }
};