import React, { Component } from "react";

import Add from '../add/add';
import Pane from '../pane/pane';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subreddits: []
    };

    this.addPane = this.addPane.bind(this);
    this.renderPanes = this.renderPanes.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
  }

  renderPanes() {
    return this.state.subreddits.map((sub, i) => <Pane subreddit={sub} key={i} />);
  }

  addPane(sub) {
    const subreddits = this.state.subreddits;
    subreddits.push(sub);
    this.setState({
      subreddits
    });
  }

  render() {
    return <div className="dashboard">
        <Add add={this.addPane}/>
        {this.renderPanes()}
      </div>;
  }
}

export default Dashboard;
