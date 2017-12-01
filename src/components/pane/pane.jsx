import React, {Component} from "react";
import Axios from 'axios';

class Pane extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subName: this.props.subreddit,
      posts: {}
    };
  }

  componentDidMount() {
    console.log(this.props);
    Axios
      .get(`https://www.reddit.com/r/${this.state.subName}.json`)
      .then(res => console.log(res));
  }

  render() {
    return (
      <div className="Pane">
        <h1>{this.state.subName}</h1>
      </div>
    );
  }
}

export default Pane;
