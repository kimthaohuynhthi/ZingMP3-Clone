// libs
import React from "react";
import { HomeFilled } from "@ant-design/icons";
// dataSources
import menuNavbar from "../../../../dataSources/Navbar";
// others
import "./style.scss";

const NavbarMenu = () => (
  <div className="navbar-menu-wrapper">
    <ul>
      <li>
        <a href="#" className="home-icon" title="Zing MP3">
          <HomeFilled />
        </a>
      </li>
      {menuNavbar.map((menuItem) => (
        <li key={menuItem.id}>
          <a href="#" title={menuItem.title}>
            {menuItem.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
export default NavbarMenu;
