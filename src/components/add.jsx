import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchResults, receiveSubs, clearResults} from "../reducers/subsReducer";

const mapStateToProps = (state, ownProps) => ({subreddits: state.subreddits});

const mapDispatchToProps = dispatch => ({
  fetchResults: query => dispatch(fetchResults(query)),
  receiveSubs: subs => dispatch(receiveSubs(subs)),
  clearResults: () => dispatch(clearResults())
});

class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      subscriptions: this.props.subreddits.subscriptions,
      results: []
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      subscriptions: newProps.subreddits.subscriptions,
      results: newProps.subreddits.searchResults
    });
  }

  search(query) {
    if (query.length === 0) {
      this.props.clearResults();
    } else {
      this.props.fetchResults(query);
    }
  }

  clear() {
    this.props.clearResults();
    this.setState({ query: "" });
  }

  handleChange(field) {
    return e =>
      this.setState(
        {
          [field]: e.currentTarget.value
        },
        () => this.search(this.state.query)
      );
  }

  handleSubmit(sub) {
    let subExists = this.state.subscriptions.includes(sub);

    if (subExists) {
      console.log("nope!");
    } else {
      this.props.receiveSubs(this.state.subscriptions.concat([sub]));
    }
    this.clear();
  }

  render() {
    return (
      <div className="Add" style={addStyles}>
        <h1
          style={{
            margin: "0px"
          }}
        >
          r/
          <input
            id="query"
            type="text"
            value={this.state.query}
            onChange={this.handleChange("query")}
          />
          <button id="add" onClick={() => this.handleSubmit(this.state.query)}>
            ADD
          </button>
        </h1>
        <ul className="results" style={resultStyles}>
          {this.state.results.map(result => {
            return (
              <li
                key={result.id}
                onClick={() => this.handleSubmit(result.name)}
              >
                {result.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add);

const addStyles = {
  position: 'relative'
};

const resultStyles = {
  position: "absolute",
  top: '35px',
  margin: '0px',
  cursor: 'pointer',
  background: '#fafafa'
};