// libs
import React from "react";
// component
import HeaderSearch from "./mains/HeaderSearch";
import HeaderMenu from "./mains/HeaderMenu";
// others
import logo from "../../assets/logo-zingmp3.png";
import "./style.scss";

const Header = () => (
  <div className="header-wrapper">
    <div className="header-wrapper-inner">
      <div className="header-logo">
        <a href="#" className="logo" title="Zing MP3 - Đỉnh cao âm nhạc">
          <img src={logo} alt="logo-zingmp3" />
        </a>
      </div>
      <HeaderSearch />
      <HeaderMenu />
      <div className="button-login" title="Đăng nhập">
        <a href="#">Đăng nhập</a>
      </div>
    </div>
  </div>
);
export default Header;
