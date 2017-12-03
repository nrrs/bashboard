import { connect } from "react-redux";
import Pane from "./pane";
import { requestPosts } from "../../reducers/postsReducer";

// import {
//   requestAllComments,
//   requestCommentsForPost
// } from "../../actions/comment_actions";

// import { selectAllObjects } from "../../reducers/selectors";

const mapStateToProps = ({ postsBySubs }, ownProps) => {
  return { postsBySubs };
};

const mapDispatchToProps = dispatch => ({
  requestPosts: sub => dispatch(requestPosts(sub)),
  //   requestAllComments: () => dispatch(requestAllComments()),
  //   requestAllImages: () => dispatch(requestAllImages()),
  //   requestCommentsForPost: post => dispatch(requestCommentsForPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(Pane);
