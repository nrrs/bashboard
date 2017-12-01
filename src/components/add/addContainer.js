import { connect } from "react-redux";
import Add from "./add";
// import { requestPosts } from "../../reducers/subsReducer";

const mapStateToProps = ({ subreddits }) => {
  // const mapStateToProps = (state) => {
  return {
    dummy: 'dummy'
  };
};

const mapDispatchToProps = dispatch => ({
//   requestPosts: sub => dispatch(requestPosts(sub))
});

export default connect(mapStateToProps, mapDispatchToProps)(Add);
