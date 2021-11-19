// libs
import React from "react";
import { HomeFilled } from "@ant-design/icons";
// dataSources
import menuNavbar from "../../../../dataSources/Navbar";
// others
import "./style.scss";

const NavbarMenu = () => (
  <div className="navbar-menu-wrapper">
    <div className="navbar-menu-wrapper-inner">
      <ul>
        <li>
          <a href="/" className="home-icon" title="Zing MP3">
            <HomeFilled />
          </a>
        </li>
        {menuNavbar.map((menuItem) => (
          <li>
            <a href="/" title={menuItem.title}>
              {menuItem.label}
            </a>
          </li>
        ))}
      </ul>
      <select
        className="select-languages"
        // defaultValue={locale}
        // onChange={(e) => setLocale(e.target.value)}
      >
        <option value="vi">Tiếng Việt</option>
        <option value="en">Asâs</option>
      </select>
    </div>
  </div>
);
export default NavbarMenu;
