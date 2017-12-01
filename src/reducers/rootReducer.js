import { combineReducers } from "redux";

import { PostsReducer } from "./postsReducer";
// import ImageReducer from "./image_reducer";
// import CommentReducer from "./comment_reducer";
// import ProfileReducer from "./profile_reducer";
// import ErrorReducer from "./error_reducer";

const RootReducer = combineReducers({
  posts: PostsReducer,
//   comments: CommentReducer,
//   profile: ProfileReducer,
//   errors: ErrorReducer,
//   session: SessionReducer
});

export default RootReducer;

