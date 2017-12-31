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
  margin: 25,
  width: 500,
  height: 300
};
const VERT_BAR = {
  margin: 50,
  width: 500,
  height: 300
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
    const { barChartType } = this.state;
    const { margin, width, height } = barChartType === "horizontal" 
      ? HOR_BAR 
      : VERT_BAR;
    const svg = d3.select(this.node);

    svg
      .attr("width", width + margin * 2)
      .attr("height", height + margin * 2)
      .attr("style", "border: 1px solid #e0e0e0");

    const xAxis = d3.scaleLinear();
    const yAxis = d3.scaleLinear();
    const bar = svg
      .selectAll("g")
      .data(this.state.data)
      .enter()
      .append("g");

    if (barChartType === 'horizontal') {
      xAxis
        .domain(d3.extent(this.state.data, (d, i) => i))
        .range([0, width - margin/2]);
      yAxis
        .domain([0, d3.max(this.state.data, d => d.score)])
        .range([height, 0]);
      bar
        .attr("transform", `translate(${margin}, ${margin})`)
        .append("rect")
        .attr("class", "bar")
        .attr("width", (width - (margin * 6)) / this.state.data.length)
        .attr("height", d => height - yAxis(d.score))
        .attr("x", (d, i) => xAxis(i))
        .attr("y", d => yAxis(d.score))
        .attr("fill", "#ccc");
      bar
        .append("text")
        .attr("class", "label")
        .attr("x", (d, i) => xAxis(i))
        .attr("y", d => height + margin / 3)
        .attr("dy", ".5em")
        .text((d, i) => i + 1); 
    } else { // VERTICAL BAR CHART
      xAxis
        .domain([0, d3.max(this.state.data, d => d.score)])
        .range([0, width]);
      yAxis
        .domain(d3.extent(this.state.data, (d, i) => i))
        .range([0, height]);
      bar
        .attr("transform", `translate(${margin}, 0)`)
        .append("rect")
        .attr("class", "bar")
        .attr("width", d => xAxis(d.score))
        .attr("height", height / this.state.data.length)
        .attr("y", (d, i) => yAxis(i))
        .attr("fill", "#ccc");
      bar
        .append("text")
        .attr("class", "label")
        .attr("x", d => width + margin / 3)
        .attr("y", (d, i) => yAxis(i))
        .attr("dy", ".5em")
        .text((d, i) => i + 1);
    }

    // const xAxis = d3
    //   .scaleLinear()
    //   .domain(d3.extent(this.state.data, (d, i) => i))
    //   .range([0, width - stroke - margin]);

    // const yAxis = d3
    //   .scaleLinear()
    //   .domain([0, d3.max(this.state.data, d => d.score)])
    //   .range([height, 0]);

    // const bar = svg
    //   .selectAll("g")
    //   .data(this.state.data)
    //   .enter()
    //   .append("g")
    //   .attr("transform", `translate(${margin}, ${margin})`);
// bar
//   .append("text")
//   .attr("class", "label")
//   .attr("x", (d, i) => xAxis(i) - 3)
//   .attr("y", d => height + margin / 3)
//   .attr("dy", ".75em")
//   .text(function(data) {
//     return data.score;
//   }); 
    
  }

  render() {
    return <svg ref={node => this.node = node} className="chart"></svg>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BarChart);