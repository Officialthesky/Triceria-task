import React, { useState } from "react";

export default function Counter({ order, editThisOrder, index }) {
  const [orderQuantity, setOrderQuantity] = useState(1);

  const increaseByOneQuantity = () => {
    editThisOrder(true, index, order);

    setOrderQuantity(orderQuantity + 1);
  };
  const decreaseByOneQuantity = () => {
    editThisOrder(false, index, order);
    setOrderQuantity(orderQuantity - 1);
  };
  return (
    <div className="orderNumbers">
      <button>
        <span onClick={() => decreaseByOneQuantity(order)}>-</span>
        {order.quantity}
        <span onClick={() => increaseByOneQuantity(order)}>+</span>
      </button>
    </div>
  );
}
