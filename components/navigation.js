import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";

class Navigation extends Component {

  render() {
    return (
      // Navigation
      <nav className="navbar-wrapper navbar navbar-expand-lg fixed-top navbar-light bg-light">
        <div className="container navbar-container">
            <div className="row navbar-top">
              <div className="col navbar-top-left">
                <div className="shop-logo">LOGO</div>
              </div>
              <div className="col navbar-top-right">
                Search
              </div>
            </div>
            <div className="row navbar-bottom">
              
            </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;