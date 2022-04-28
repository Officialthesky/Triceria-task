import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";
import Menus from "../../Components/Menus";
import Orderspreview from "../../Components/Orderspreview";
export default function Homepage() {
  const [orderPlaced, setOrderPlaced] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState();
  const [totalMenuPrice, setTotalMenuPrice] = useState();
  const addThisOrder = (menu) => {
    if (selectedMenu === menu.id) {
      const result = orderPlaced.filter(function (item) {
        return menu.id !== item.id;
      });
      setOrderPlaced(result);
      totalOrderPrice(result);
    } else {
      setSelectedMenu(menu.id);
      const temporderPlaced = orderPlaced;
      temporderPlaced.push(menu);
      setOrderPlaced(temporderPlaced);
      totalOrderPrice(temporderPlaced);
    }
  };

  const navigate = useNavigate();

  const editThisOrder = (isInc, index, order) => {
    if (isInc === true) {
      orderPlaced[index].quantity = orderPlaced[index].quantity + 1;
      orderPlaced[index].totalMenuPrice =
        orderPlaced[index].totalMenuPrice + orderPlaced[index].menuPrice;
    } else {
      if (orderPlaced[index].quantity <= 1) {
        const result = orderPlaced.filter(function (item) {
          return order.id !== item.id;
        });
        setOrderPlaced(result.slice());
        return;
      }

      orderPlaced[index].quantity = orderPlaced[index].quantity - 1;
      orderPlaced[index].totalMenuPrice =
        orderPlaced[index].totalMenuPrice - orderPlaced[index].menuPrice;
    }
    setOrderPlaced(orderPlaced.slice());

    totalOrderPrice(orderPlaced.slice());
  };

  const totalOrderPrice = (temp) => {
    var result = temp.reduce(function (acc, obj) {
      return acc + obj.totalMenuPrice;
    }, 0);
    setTotalMenuPrice(result);
  };

  const checkout = () => {
    let state = {
      orderPlaced,
    };
    navigate(`/ordersplaced`, {
      state,
    });
  };

  return (
    <div className="homepage">
      <div className="menuSidebar">
        <div className="menu">
          <p>MENU</p>
        </div>
      </div>
      <div className="foodMenus">
        <div className="filterOption">
          <select name="filters" value="filters">
            <option value="filters">filters</option>
          </select>
        </div>
        <Menus
          editThisOrder={editThisOrder}
          addThisOrder={addThisOrder}
          orderPlaced={orderPlaced}
        />
      </div>

      <div className="ordersPreview">
        <div className="topOrdersPreview">
          <h4>My Order</h4>
          <p>Edit</p>
        </div>
        <div className="orderTime">
          <p>14:30 AM</p>
        </div>
        <hr></hr>
        <Orderspreview
          orderPlaced={orderPlaced}
          editThisOrder={editThisOrder}
          hide={true}
        />
        <div className="dragAndDrop">
          <p>Drag&Drop</p>
        </div>
        <div className="totalPayment">
          <p>Total</p>
          <p>${(Math.round(totalMenuPrice * 100) / 100).toFixed(2)}</p>
        </div>
        <button className="checkoutBtn" onClick={checkout}>
          Checkout
        </button>
      </div>
    </div>
  );
}
