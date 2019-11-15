import React from "react";

class SearchBox extends React.Component {
  state = { term: "" };

  onSubmitTerm = e => {
    e.preventDefault();
    this.props.termSelect(this.state.term);
  };

  render() {
    return (
      <nav style={{ backgroundColor: "#2a7fc1" }}>
        <div className="nav-wrapper">
          <form onSubmit={this.onSubmitTerm}>
            <div className="input-field">
              <input
                id="search"
                type="search"
                onChange={e => {
                  this.setState({ term: e.target.value });
                }}
                required
                placeholder="Search"
              />
              <span className="material-icons">X</span>
            </div>
          </form>
        </div>
      </nav>
    );
  }
}

export default SearchBox;
