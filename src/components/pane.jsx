import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPosts} from "../reducers/postsReducer";
import BarChart from "./charts/barChart";

const mapStateToProps = (state, ownProps) => ({postsBySubs: state.postsBySubs});

const mapDispatchToProps = dispatch => ({
  fetchPosts: sub => dispatch(fetchPosts(sub))
});

class Pane extends Component {
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
      <BarChart sub={this.props.sub} data={[{
        'x': 10,
        'y': 100,
        'label': 'norris'
    }, {
        'x': 20,
        'y': 200,
        'label': 'bailey'
    }, {
        'x': 30,
        'y': 150,
        'label': 'goody'
    }, {
        'x': 40,
        'y': 210,
        'label': 'bobo'
    }, {
        'x': 50,
        'y': 410,
        'label': 'jane'
    }]} size={[500,500]} />
      {this.renderPosts()}
    </div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pane);
