import React, { Component } from "react";
import { connect } from "react-redux";
import * as d3 from 'd3';


const mapStateToProps = (state, ownProps) => ({
  data: state.postsBySubs[ownProps.sub]
});

const mapDispatchToProps = dispatch => ({
//   fetchPosts: sub => dispatch(fetchPosts(sub))
});

const HOR_BAR = {
  width: 500,
  height: 300
};
const VERT_BAR = {
  width: 300,
  height: 300
};
const BAR_DIMENSIONS = {
  margin: 50,
};

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillReceiveProps(nextProps) { 
    let data = Object.keys(nextProps.data).map(title => nextProps.data[title]);
    this.setState({ data });
    this.createBarChart();
  }
  componentDidMount() {
    this.createBarChart();
  }

  componentDidUpdate(prevProps, prevState) {
    this.createBarChart();
  }

  createBarChart() {
    const { data } = this.state;
    const { barChartType } = this.props;
    const { margin } = BAR_DIMENSIONS;
    const { width, height } = barChartType === 'hor-bar' ? HOR_BAR : VERT_BAR;
    const svg = d3.select(this.node)
      .attr("width", width + margin)
      .attr("height", height + margin);
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

    if (barChartType === 'hor-bar') {
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

  componentWillUnmount() {
    console.log('unmount');
  }

  render() {
    const { barChartType } = this.props;
    return <div className="chart">
        <svg ref={node => (this.node = node)} className={`bar-chart ${barChartType}`} />
      </div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BarChart);