import React, { Component } from "react";
import { connect } from "react-redux";
import * as d3 from 'd3';


const mapStateToProps = (state, ownProps) => ({
  data: state.postsBySubs[ownProps.sub],
  barChartType: ownProps.barChartType,
});

const mapDispatchToProps = dispatch => ({
//   fetchPosts: sub => dispatch(fetchPosts(sub))
});

const HOR_BAR = {
  width: 700,
  height: 500
};
const VERT_BAR = {
  width: 500,
  height: 500
};
const BAR_DIMENSIONS = {
  margin: 50,
};

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
    this.createBarChart();
  }

  createBarChart() {
    const { barChartType, data } = this.state;
    const { margin } = BAR_DIMENSIONS;
    const { width, height } = barChartType === 'horizontal' ? HOR_BAR : VERT_BAR;

    const svg = d3.select(this.node);
    svg
      .attr("width", width + margin)
      .attr("height", height + margin)
      .attr("style", "border: 1px solid #e0e0e0");

    const xAxis = d3.scaleLinear();
    const yAxis = d3.scaleLinear();
    const bar = svg
      .selectAll("g")
      .data(this.state.data)
      .enter()
      .append("g")
      .attr("transform", `translate(${margin/2}, ${margin/2})`);
    const text = bar
      .append("text")
      .attr("class", "label")
      .text((d, i) => i + 1); 
    

    if (barChartType === 'horizontal') {
      xAxis
        .domain(d3.extent(data, (d, i) => i))
        .range([0, width - margin/2]);
      yAxis
        .domain([0, d3.max(data, d => d.score)])
        .range([height, 0]);
      bar
        .append("rect")
        .attr("class", "bar")
        .attr("width", (width - margin/2) / data.length)
        .attr("height", d => height - yAxis(d.score))
        .attr("x", (d, i) => xAxis(i))
        .attr("y", d => yAxis(d.score))
        .attr("fill", "#ccc");
      text
        .attr("x", (d, i) => xAxis(i))
        .attr("y", d => height + 16)
        .attr("text-anchor", "start");
    } else { // VERTICAL BAR CHART
      xAxis
        .domain([0, d3.max(data, d => d.score)])
        .range([0, width]);
      yAxis
        .domain(d3.extent(data, (d, i) => i))
        .range([0, height - margin/4]);
      bar
        .append("rect")
        .attr("class", "bar")
        .attr("width", d => xAxis(d.score))
        .attr("height", (height - margin/2) / data.length)
        .attr("y", (d, i) => yAxis(i))
        .attr("fill", "#ccc");
      text
        .attr("y", (d, i) => yAxis(i) + 16)
        .attr("x", -16)
        .attr("text-anchor", "middle");
    }
    
  }

  render() {
    return <svg ref={node => this.node = node} className="chart"></svg>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BarChart);