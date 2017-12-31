import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPosts} from "../reducers/postsReducer";
import BarChart from "./charts/barChart";

const mapStateToProps = (state, ownProps) => ({postsBySubs: state.postsBySubs});

const mapDispatchToProps = dispatch => ({
  fetchPosts: sub => dispatch(fetchPosts(sub))
});

class Pane extends Component {
  componentDidMount() {
    this
      .props
      .fetchPosts(this.props.sub);
  }

  render() {
    const { sub, postsBySubs } = this.props;
    return <div className="Pane">
        <h2>{this.props.sub}</h2>
        <BarChart sub={sub} data={postsBySubs[sub]} barChartType="horizontal" />
        <BarChart sub={sub} data={postsBySubs[sub]} barChartType="vertical" />
        {/* {this.renderPosts()} */}
      </div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pane);



// renderPosts() {
  //   const {sub, postsBySubs} = this.props;
  //   const posts = !postsBySubs[sub]
  //     ? []
  //     : Object.keys(postsBySubs[sub]);

  //   return (
  //     <ul className="posts">
  //       {posts.map(id => {
  //         const altText = !postsBySubs[sub][id].thumbnail ? '' : postsBySubs[sub][id].title;
  //         return <li key={id}>
  //             <img src={postsBySubs[sub][id].thumbnail} alt={altText}/>
  //             <strong>Title:</strong>
  //             <span>
  //               <a href={postsBySubs[sub][id].url}>
  //                 {postsBySubs[sub][id].title}
  //               </a>
  //             </span>
  //             <br />
  //             <strong>Author:</strong>
  //             <span>{postsBySubs[sub][id].author}</span>
  //           </li>;
  //       })}
  //     </ul>
  //   );
  // }