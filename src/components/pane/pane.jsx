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
    const posts = this.props.posts;
    const postsIDs = Object.keys(posts);


    return <div className="Pane">
        <h1>{this.state.subName}</h1>
        <ul>
          {postsIDs.map(id => {
            return (
              <li key={id}>
                <strong>Title: </strong>{posts[id].data.title}<br/>
                <strong>Score: </strong>{posts[id].data.score}
              </li>
            );
          })}
        </ul>
      </div>;
  }
}

export default Pane;
