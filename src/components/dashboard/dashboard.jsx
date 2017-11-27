import React, { Component } from "react";


import Pane from '../pane/pane';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subreddits: ["aww", "news", "funny"]
    };
  }

  componentDidMount() {
    console.log(this.props);
  }

  renderPanes() {
    return this.state.subreddits.map((sub, i) => <Pane subreddit={sub} key={i} />);
  }

  render() {
    
    return <div className="dashboard">
        <h1>Dashboard</h1>
        {this.renderPanes()}
      </div>;
  }
}

export default Dashboard;
