import React, {Component} from "react";

class Pane extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subName: this.props.subreddit
    };
  }

  componentDidMount() {
    this
      .props
      .requestPosts(this.state.subName);
  }

  render() {
    const postsById = Object.keys(this.props.posts);

    const posts = this.props.posts;

    return (
      <div className="Pane">
        <h1>{this.state.subName}</h1>
        <ul>{postsById.map(id => <li key={id}>{posts[id].data.title}</li>)}</ul>
      </div>
    );
  }
}

export default Pane;
