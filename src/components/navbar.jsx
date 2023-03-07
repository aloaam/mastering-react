import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
            <span className="badge bg-pill bg-secondary m-2">
              {this.props.countersCount}
            </span>
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;