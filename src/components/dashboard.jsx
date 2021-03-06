import React, {Component} from "react";
import {connect} from "react-redux";
import Header from "./header";
import Pane from "./pane";

const mapStateToProps = (state, ownProps) => ({subscriptions: state.subreddits.subscriptions});

const mapDispatchToProps = dispatch => ({});

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subscriptions: this.props.subscriptions
    };
    this.renderPanes = this
      .renderPanes
      .bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({subscriptions: newProps.subscriptions});
  }

  renderPanes() {
    return this
      .state
      .subscriptions
      .map((sub, i) => (<Pane sub={sub} key={i}/>));
  }

  render() {
    return (
      <div className="dashboard">
        <Header />
        <div className="main">
          {this.renderPanes()}
        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
