import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({  });

const mapDispatchToProps = dispatch => ({
});

class ChartSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedChart: 'hor-bar',
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(e) {
    this.setState({selectedChart: e.target.value});
  }

  render() {
    return <div className="chart-selector">
        <form>
          <label>
            <input type="radio" value="hor-bar" onChange={this.handleOptionChange} checked={this.state.selectedChart === "hor-bar"} />Horizontal Bar
          </label>
          <label>
            <input type="radio" value="vert-bar" onChange={this.handleOptionChange} checked={this.state.selectedChart === "vert-bar"} />Vertical Bar
          </label>
          <label>
            <input type="radio" value="pie-chart" onChange={this.handleOptionChange} checked={this.state.selectedChart === "pie-chart"} />Pie Chart
          </label>
        </form>
      </div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartSelector);

