//libs
import React from "react";
// datasource
import { menuFooter } from "../../../../dataSources/Footer";
//others
import "./style.scss";

const MenuFooter = () => (
  <div className="menu-footer-wrapper">
    <ul>
      {menuFooter.map((item) => (
        <li key={item.id}>
          <a href="/">{item.name}</a>
        </li>
      ))}
    </ul>
  </div>
);
export default MenuFooter;
