import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//import { addShipping } from './actions/cartActions'
class Checkout extends Component {
  render() {
    return (
      <div className="my-5">
        <div className="container shadow">
          <div className="overflow-hidden py-5">
            <div className="row text-center align-items-center ">
              <div className="col-12 col-md-4 mx-2">
                <div class="form-group">
                  <label for="InputEmail1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter your email "
                  ></input>
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class="form-group">
                  <h5 for="exampleFormControlTextarea1">Address</h5>
                  <textarea
                    class="form-control"
                    rows="3"
                    placeholder="Enter your address"
                  ></textarea>
                </div>
              </div>
              <div className="col-12 col-md-7  text-end ">
                <h4 className="text-monospace">Total:&nbsp;</h4>
                <h1 className="font-weight-bold"> $ {this.props.total} </h1>
              </div>
            </div>
          </div>
          <Link to="/cart">
            <button type="button" className="btn btn-outline-danger mx-5 my-5">
              <h4>Edit Your order</h4>
            </button>
          </Link>
          <Link to="/">
            <button type="button" className="btn btn-success">
              <h4>Place Order</h4>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
    total: state.total,
  };
};

export default connect(mapStateToProps)(Checkout);
