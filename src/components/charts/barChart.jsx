import React, { Component } from "react";
import { connect } from "react-redux";


const mapStateToProps = (state, ownProps) => ({
  data: state.postsBySubs[ownProps.sub],
  postTitles: ownProps.sub
});

const mapDispatchToProps = dispatch => ({
//   fetchPosts: sub => dispatch(fetchPosts(sub))
});

class BarChart extends Component {
  componentDidMount() {
    // this.props.fetchPosts(this.props.sub);
  }

  render() {
    console.log(this.props);
    return <div className="BarChart">
        <strong>{this.props.sub} Bar Chart</strong>
      </div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BarChart);
