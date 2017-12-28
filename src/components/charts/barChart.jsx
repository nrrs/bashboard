import React, { Component } from "react";
import { connect } from "react-redux";
import * as d3 from 'd3';


const mapStateToProps = (state, ownProps) => ({
  // data: state.postsBySubs[ownProps.sub]
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

  componentDidMount() {
    this.createBarChart();
  }

  componentWillReceiveProps(nextProps) {
    let postTitles = Object.keys(nextProps.data);
    let postDates = Object.keys(nextProps.data).map(title => nextProps.data[title].created_utc);

    this.setState({ 
      postTitles,
      postDates
    });
  }

  componentDidUpdate(prevProps, prevState) {
    this.createBarChart();
  }

  createBarChart() {
    var svg = d3.select(this.node);

    const margin = 50;
    const width = 700;
    const height = 500;
    const barWidth = 25;

    svg
      .attr("width", width + margin * 2)
      .attr("height", height + margin * 2)
      .attr("style", "border: 1px solid red");

    const xAxis = d3
      .scaleLinear()
      .domain(d3.extent(this.props.data, (d, i) => i))
      .range([0, width - barWidth - margin]);

    const yAxis = d3
      .scaleLinear()
      .domain([0, d3.max(this.props.data, d => d.y)])
      .range([height, 0]);

    const bar = svg
      .selectAll("g")
      .data(this.props.data)
      .enter()
      .append("g")
      .attr("transform", `translate(${margin}, ${margin})`);

    bar
      .append("rect")
      .attr("class", "bar")
      .attr("width", barWidth)
      .attr("height", d => height - yAxis(d.y))
      .attr("x", (d, i) => xAxis(i))
      .attr("y", d => yAxis(d.y))
      .attr("fill", "red");

    bar
      .append("text")
      .attr("class", "label")
      .attr("x", (d, i) => xAxis(i) - 3)
      .attr("y", d => height + margin / 3)
      .attr("dy", ".75em")
      .text(function(data) {
        return data.label;
      }); 
  }

  render() {
    return <svg ref={node => this.node = node} width={500} heigh={500}></svg>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BarChart);
