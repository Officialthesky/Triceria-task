import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Orderspreview from "../../Components/Orderspreview";
import "./index.css";

export default function Ordersplaced() {
  let { state } = useLocation();
  const [placeYourOrder, setPlaceYourOrder] = useState("Place Order");

  const placeOrder = () => {
    setPlaceYourOrder("Succesfully Ordered");
  };

  return (
    <div className="ordersPlaced">
      <div className="ordersPlacedModal">
        <Orderspreview orderPlaced={state.orderPlaced} hide={false} />{" "}
        <button onClick={placeOrder}>{placeYourOrder}</button>
      </div>
    </div>
  );
}
