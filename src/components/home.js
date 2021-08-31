import React, { Component } from "react";
import "../components/home.css";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";

class home extends Component {
  handleClick = (id) => {
    this.props.addToCart(id);
  };
  render() {
    let itemList = this.props.items.map((item) => {
      return (
        <div className="col-12 col-md-4 py-4 zoom">
          <div className="card-body" key={item.id}>
            <div className="bg-image ">
              <img className=" img-fluid" src={item.img} alt={item.title} />
            </div>
            <h4 className="card-title ">{item.title}</h4>
            <h6>Price: ${item.price}</h6>
            <p>{item.desc}</p>
            <button
              type="button"
              className="btn pmd-btn-raised pmd-ripple-effect btn-danger waves-effect"
              id="dam"
              onClick={() => {
                this.handleClick(item.id);
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      );
    });
    return (
      <div className="container text-center my-5 py-2">
        <h2 className="center">Our items</h2>
        <div className="row my-4 pt-4">{itemList}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(home);
