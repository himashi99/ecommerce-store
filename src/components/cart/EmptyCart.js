import React from "react";
import emptyCart from "../../empty-cart.png";

export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title">
          <h2>Womp womp...your cart is currently empty.</h2>
          <div class="d-flex justify-content-center">
            <img src={emptyCart} alt="store" />
          </div>
        </div>
      </div>
    </div>
  );
}
