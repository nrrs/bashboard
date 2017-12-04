import React, {Component} from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../reducers/postsReducer";

const mapStateToProps = ({ postsBySubs }, ownProps) => {
  return { postsBySubs };
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: sub => dispatch(fetchPosts(sub)),
});


class Pane extends Component {
  constructor(props) {
    super(props);
    this.state = { chartType: '' };
  }

  componentDidMount() {
    console.log(this.props);
    console.log('this.props.sub inside pane', this.props.sub);
    this
      .props
      .fetchPosts(this.props.sub);
  }

  renderPosts() {
    const {sub, postsBySubs } = this.props;
    const posts = !postsBySubs[sub] ? [] : Object.keys(postsBySubs[sub]);

    return (
      <ul>
          {posts.map(id => {
            return (
              <li key={id}>
                <strong>Title: </strong>{postsBySubs[sub][id].title}<br/>
                <strong>Author: </strong>{postsBySubs[sub][id].author}
              </li>
            );
          })}
        </ul>
    );
  }

  render() {
    return <div className="Pane">
        <h1>{this.props.sub}</h1>
        {this.renderPosts()}
      </div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pane);
