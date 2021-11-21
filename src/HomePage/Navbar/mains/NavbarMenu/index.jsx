// libs
import React from "react";
import { HomeFilled } from "@ant-design/icons";
// dataSources
import menuNavbar from "../../../../dataSources/Navbar";
// context
import { useLocale } from "../../../../contexts/LocaleContexts";
// others
import "./style.scss";

const NavbarMenu = () => {
  const { localeDataSource } = useLocale();
  return (
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
              {localeDataSource[menuItem.name]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NavbarMenu;
