import React, {Component} from "react";

class Pane extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this
      .props
      .requestPosts(this.props.sub);
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

export default Pane;
