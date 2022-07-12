import React from "react";
import { useState } from "react";

const CartItem = () => {
  this.state = {
    Price: 999,
    Title: "Phone",
    Qty: 1,
    Img: "",
  };

  const [Qty, setQty] = useState(Qty);
  const increaseQuantity = () => setQty(Qty + 1);
  const decreaseQuantity = () => setQty(Qty - 1);



return (
  <>
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}> {this.state.Title} </div>
        <div style={{ color: "#777" }}>Rs {this.state.Price}</div>
        <div style={{ color: "#777" }}>Qty: {this.increaseQuantity} </div>
        <div className="cart-item-actions">
          {/* Buttons */}
          <img
            alt="increase"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/128/1828/1828817.png"
            onClick={this.increaseQuantity}
          />

          <img
            alt="decrease"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/463/463700.png"
            onClick={this.decreaseQuantity}
          />

          <img
            alt="delete"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/7265/7265328.png"
            onClick={this.deleteQuantity}
          />
        </div>
      </div>
    </div>
  </>
);
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
