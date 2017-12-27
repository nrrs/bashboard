import React, { Component } from "react";
import { connect } from "react-redux";


const mapStateToProps = (state, ownProps) => ({
  data: state.postsBySubs[ownProps.sub]
});

const mapDispatchToProps = dispatch => ({
//   fetchPosts: sub => dispatch(fetchPosts(sub))
});

class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postTitles: [],
      postDates: []
    };
  }

  componentWillReceiveProps(nextProps) {
    let postTitles = Object.keys(nextProps.data);
    let postDates = Object.keys(nextProps.data).map(title => nextProps.data[title].created_utc);

    this.setState({ 
      postTitles,
      postDates
    });
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    return <div className="BarChart">
        <strong>{this.props.sub} Bar Chart</strong>
      </div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BarChart);
