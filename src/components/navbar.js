import { Link } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    return (
      <div style={{ zIndex: 2, opacity: 0.6 }} className="sticky-top">
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark justify-content-between">
          <div className="container my-2">
            <Link to="/" className="navbar-brand text-white font-weight-bold ">
              <h2> Pulitzer Paris</h2>
            </Link>

            <div
              className="collapse navbar-collapse flex-grow-0"
              id="collapseNav"
            >
              <div className="navbar-nav">
                <Link
                  to="/allorders"
                  className="navbar-brand text-light mx h3 my-auto"
                >
                  <h4> All Orders </h4>
                </Link>
                <Link
                  to="/"
                  className="navbar-brand text-light mx-5 h3 my-auto"
                >
                  <h4> Menu </h4>
                </Link>
                <Link to="/cart" className="text-light mx-2 h3 my-auto">
                  <i class="fas fa-shopping-cart"></i>
                </Link>
                <div
                  style={{
                    position: "relative",
                    right: "6.0%",
                    height: "1rem",
                    top: "-0.6rem",
                  }}
                >
                  <div className="rounded-pill  my-2  bg-white">
                    <h6 className="text-dark mx-2 my-auto">
                      {this.props.total}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    total: state.quantity,
  };
};
export default connect(mapStateToProps)(Navbar);
