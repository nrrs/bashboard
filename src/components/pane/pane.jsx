import React, { Component } from "react";

class Pane extends Component {
  constructor(props) {
    super(props);

    this.state = {
        title: this.props.subreddit,
        posts: {}
    };
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
      
    return (
      <div className="Pane">
        <h1>{this.state.title}</h1>
      </div>
    );
  }
}

export default Pane;
