import { connect } from "react-redux";
import Pane from "./pane";
// import { requestAllImages } from "../../actions/image_actions";

// import {
//   requestAllComments,
//   requestCommentsForPost
// } from "../../actions/comment_actions";

// import { selectAllObjects } from "../../reducers/selectors";

const mapStateToProps = ({}) => {
  // const mapStateToProps = (state) => {
  return {
    test: [1,2,3]
  };
};

const mapDispatchToProps = dispatch => ({
//   requestAllComments: () => dispatch(requestAllComments()),
//   requestAllImages: () => dispatch(requestAllImages()),
//   requestCommentsForPost: post => dispatch(requestCommentsForPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(Pane);
