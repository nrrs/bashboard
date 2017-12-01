import React, {Component} from "react";

class Pane extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subName: this.props.subreddit,
      posts: {}
    };
  }

  componentDidMount() {
    this.props.requestPosts(this.state.subName);
  }

  render() {
    console.log('AHHHH', this.props);
    return (
      <div className="Pane">
        <h1>{this.state.subName}</h1>
      </div>
    );
  }
}

export default Pane;
