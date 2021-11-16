// libs
import React from "react";
// components
import NavbarMenu from "./mains/NavbarMenu";
import FunctionMenu from "./mains/FunctionalMenu";
// others
import "./style.scss";

const Navbar = () => (
  <div className="navbar-wrapper">
    <div className="navbar-wrapper-inner">
      <NavbarMenu />
      <FunctionMenu />
    </div>
  </div>
);
export default Navbar;
