import React from "react";
import Counter from "../Counter";
export default function Orderspreview({ orderPlaced, hide, editThisOrder }) {
  return (
    <>
      {orderPlaced?.map((order, index) => {
        return (
          <div className="ordersShown" key={index}>
            <div className="orderNameAndQuantity">
              <p>{order.menuname}</p>
              <p className="quantity">{order.menuQuantity}</p>
            </div>
            {!hide ? null : (
              <Counter
                order={order}
                editThisOrder={editThisOrder}
                index={index}
              />
            )}
            <div className="orderPrice">
              <p>
                $
                {(
                  Math.round(order.menuPrice * order.quantity * 100) / 100
                ).toFixed(2)}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}
