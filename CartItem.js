import React, { useEffect } from "react";
import { useState } from "react";

const CartItem = () => {

  // const objDetails =  
  //   {id:0, Title:"Book",Price: 999, Qty:1}

  const [Qty, setQty] = useState(1);
  const increaseQuantity = () => setQty(Qty + 1);
  const decreaseQuantity = () => setQty(Qty - 1);
  const deleteQuantity = () => setQty(1);
  
  const [Price, setPrice] = useState(999);

  const NewPrice = () => setPrice(Price*Qty);

   useEffect( () => {
    onclick(NewPrice);
   },[]);


return (
  <>
    <div className="cart-item">
      <div className="left-block">
        <img src="https://images-na.ssl-images-amazon.com/images/I/711c-uf6AFL.jpg" style={styles.image}  />
      </div>
      <div className="right-block">
        {/* <div style={{ fontSize: 55 }}> {Title} </div> */}
        <div style={{ color: "whitesmoke" }}>Rs. {setPrice}</div>
        <div style={{ color: "whitesmoke" }}>Qty: {Qty} </div>
        <div className="cart-item-actions">
          {/* Buttons */}
          <img
            alt="increase"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/128/1828/1828817.png"
            onClick={increaseQuantity}
          />

          <img
            alt="decrease"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/463/463700.png"
            onClick={decreaseQuantity}
          />

          <img
            alt="delete"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/7265/7265328.png"
            onClick={deleteQuantity}
          />
        </div>
      </div>
    </div>
  </>
);
};

const styles = {
  image: {
    height: 220,
    width: 220,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
