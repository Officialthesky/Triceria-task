import React from "react";
import "./index.css";
import { menusData } from "../../Pages/Home/data";
export default function Menus({ orderPlaced, addThisOrder }) {
  return (
    <div className="menus">
      {menusData.map((menu, index) => {
        const isMenuSelected =
          orderPlaced.filter((flt) => flt.id === menu.id)?.length !== 0;

        return (
          <div
            className="menux"
            key={index}
            onClick={() => addThisOrder(menu)}
            style={{
              backgroundColor: isMenuSelected ? "green" : "#50c878",
            }}
          >
            <div className="reviewAndFavourites">
              <p>*{menu.rating}</p>
              <p>❤︎</p>
            </div>
            <div className="menuNameAndQuantity">
              <p>{menu.menuname}</p>
              <p className="menuQuantity">{menu.menuQuantity}</p>
            </div>
            <div className="menuPrice">
              <p>${menu.menuPrice}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
