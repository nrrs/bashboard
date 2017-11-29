import React, {Component} from "react";

class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subreddit: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    
    this.props.add(this.state.subreddit);
    this.setState({subreddit: ''});
  }

  render() {
    return (
      <div className="Add">
        <form onSubmit={this.handleSubmit}>
            <h1>
            r/
            <input
                id="subreddit"
                type="text"
                value={this.state.subreddit}
                onChange={this.handleChange("subreddit")}
            />
            <button type="submit">ADD</button>
            </h1>
        </form>
      </div>
    );
  }
}

export default Add;
