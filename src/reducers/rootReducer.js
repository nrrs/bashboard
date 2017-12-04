import { combineReducers } from "redux";

import { PostsReducer } from "./postsReducer";
import { SubsReducer } from "./subsReducer";
// import ImageReducer from "./image_reducer";
// import CommentReducer from "./comment_reducer";
// import ProfileReducer from "./profile_reducer";
// import ErrorReducer from "./error_reducer";

const RootReducer = combineReducers({
  postsBySubs: PostsReducer,
  subreddits: SubsReducer
//   comments: CommentReducer,
//   profile: ProfileReducer,
//   errors: ErrorReducer,
//   session: SessionReducer
});

export default RootReducer;

