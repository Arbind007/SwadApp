import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Cart extends Component {
  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map((item) => {
        return (
          <div className="overflow-hidden" key={item.id}>
            <div className="row text-center align-items-center ">
              <div className="col-12 col-md-4">
                <img src={item.img} alt={item.img} className="" />
              </div>
              <div className="col-12 col-md-8">
                <h2>{item.title}</h2>
                <h5>Price: ${item.price}</h5>
                <h6>Quantity: {item.quantity}</h6>
                {item.desc}
                <div>
                  <button
                    type="button"
                    className="btn pmd-btn-raised pmd-ripple-effect btn-danger my-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <p>Nothing.</p>
    );
    return (
      <div className="container shadow">
        <div className="cart">
          <h5>You have ordered:</h5>
          <div>{addedItems}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
  };
};

export default connect(mapStateToProps)(Cart);
