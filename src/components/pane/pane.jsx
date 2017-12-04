import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPosts} from "../../reducers/postsReducer";

const mapStateToProps = (state, ownProps) => ({postsBySubs: state.postsBySubs});

const mapDispatchToProps = dispatch => ({
  fetchPosts: sub => dispatch(fetchPosts(sub))
});

class Pane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartType: ''
    };
  }

  componentDidMount() {
    this
      .props
      .fetchPosts(this.props.sub);
  }

  renderPosts() {
    const {sub, postsBySubs} = this.props;
    const posts = !postsBySubs[sub]
      ? []
      : Object.keys(postsBySubs[sub]);

    return (
      <ul className="posts">
        {posts.map(id => {
          return <li key={id}>
              <strong>Title:</strong>
              <span>{postsBySubs[sub][id].title}</span>
              <br />
              <strong>Author:</strong>
              <span>{postsBySubs[sub][id].author}</span>
            </li>;
        })}
      </ul>
    );
  }

  render() {
    return <div className="Pane">
      <h2>{this.props.sub}</h2>
      {this.renderPosts()}
    </div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pane);
