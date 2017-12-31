import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({  });

const mapDispatchToProps = dispatch => ({
});

class ChartSelector extends Component {

  render() {
    return <ul className="chart-selector">
        <li>Horizontal Bar Chart</li>
        <li>Vertical Bar Chart</li>
        <li>Line Chart</li>
        <li>Pie Chart</li>
        <li>Ring Chart</li>
    </ul>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartSelector);

