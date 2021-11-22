// libs
import React from "react";
// components
import MenuItems from "../../../../components/MenuItems";
// dataSources
import menuHeader from "../../../../dataSources/Header";
// others
import "./style.scss";

const HeaderMenu = () => (
  <div className="header-menu-wrapper">
    <ul>
      {menuHeader.map((menuItem) => (
        <li key={menuItem.id}>
          <MenuItems title={menuItem.title} label={menuItem.label} />
        </li>
      ))}
    </ul>
  </div>
);
export default HeaderMenu;
