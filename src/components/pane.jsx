import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPosts} from "../reducers/postsReducer";
import BarChart from "./charts/barChart";
import ChartSelector from './chartSelector';
import Legend from './legend';

const mapStateToProps = (state, ownProps) => ({
  postsBySubs: state.postsBySubs,
  chartType: state.postsBySubs[`${ownProps.sub}_chart_type`]
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: sub => dispatch(fetchPosts(sub))
});

class Pane extends Component {
  componentDidMount() {
    this
      .props
      .fetchPosts(this.props.sub);
  }

  renderPosts() {
    const {sub, postsBySubs} = this.props;
    const posts = !postsBySubs[sub]
      ? []
      : Object.keys(postsBySubs[sub]);

    return (
      <ul>
        {posts.map(id => {
          const altText = !postsBySubs[sub][id].thumbnail ? '' : postsBySubs[sub][id].title;
          return <li key={id}>
              <img src={postsBySubs[sub][id].thumbnail} alt={altText}/>
              <strong>Title:</strong>
              <span>
                <a href={postsBySubs[sub][id].url}>
                  {postsBySubs[sub][id].title}
                </a>
              </span>
              <br />
              <strong>Author:</strong>
              <span>{postsBySubs[sub][id].author}</span>
            </li>;
        })}
      </ul>
    );
  }

  render() {
    const { sub, postsBySubs, chartType } = this.props;
    return <div className="pane">
        <header>
          <h2>{sub}</h2>
          <ChartSelector sub={sub} />
        </header>
        <section className="details">
          <p>sub description</p>
        </section>
        <section className="row">
          <Legend sub={sub} data={postsBySubs[sub]} />
          <BarChart sub={sub} barChartType={chartType} />
          <div className="posts">{this.renderPosts()}</div>
        </section>
        <section className="row">
          <BarChart sub={sub} barChartType="vertical" />
        </section>
      </div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pane);