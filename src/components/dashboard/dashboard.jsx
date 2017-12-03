import React, { Component } from "react";

import Add from '../add/add';
// import AddContainer from '../add/addContainer';
import PaneContainer from '../pane/paneContainer';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subreddits: []
    };

    this.addPane = this.addPane.bind(this);
    this.renderPanes = this.renderPanes.bind(this);
  }

  renderPanes() {
    return this.state.subreddits.map((sub, i) => <PaneContainer sub={sub} key={i} />);
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
        <Add add={this.addPane} />
        {this.renderPanes()}
      </div>;
  }
}

export default Dashboard;
