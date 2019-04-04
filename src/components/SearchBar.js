import React from "react";

class SearchBar extends React.Component {
  state = { input: "" };
  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.input);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search Videos</label>
            <input
              type="text"
              value={this.state.input}
              onChange={e => {
                this.setState({ input: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
