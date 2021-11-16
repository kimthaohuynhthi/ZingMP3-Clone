// libs
import React from "react";
// dataSources
import menuHeader from "../../../../dataSources/Header";
// others
import "./style.scss";

const HeaderMenu = () => (
  <div className="header-menu-wrapper">
    <ul>
      {menuHeader.map((menuItem) => (
        <li>
          <a href="/" title={menuItem.title}>
            {menuItem.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
export default HeaderMenu;
