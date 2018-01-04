import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
  data: state.postsBySubs[ownProps.sub],
  barChartType: ownProps.barChartType
});

const mapDispatchToProps = dispatch => ({
  //   fetchPosts: sub => dispatch(fetchPosts(sub))
});

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barChartType: this.props.barChartType,
      data: []
    };
  }

  componentWillReceiveProps(nextProps) {
    let data = Object.keys(nextProps.data).map(title => nextProps.data[title]);
    this.setState({ data });
  }

  componentDidUpdate(prevProps, prevState) {
  }

  render() {
    return <aside className="legend gutter-right">

    </aside>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BarChart);
