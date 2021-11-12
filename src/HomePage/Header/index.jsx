// libs
import React from "react";
// component
import HeaderSearch from "./mains/HeaderSearch";
// others
import logo from "../../assets/logo-zingmp3.png";
import "./style.scss";

const Header = () => (
  <div className="header-wrapper">
    <div className="header-wrapper-inner">
      <div className="header-logo">
        <a href="/" className="logo" title="Zing MP3 - Đỉnh cao âm nhạc">
          <img src={logo} alt="logo-zingmp3" />
        </a>
      </div>
      <HeaderSearch />
      <div className="menu">
        <ul>
          <li>
            <a href="/" className="active" title="Zing MP3">
              MP3
            </a>
          </li>
          <li>
            <a href="/" title="Zing News">
              NEWS
            </a>
          </li>
          <li>
            <a href="/" title="Zing TV">
              TV
            </a>
          </li>
          <li>
            <a href="/" title="Zalo PC">
              ZALO PC
            </a>
          </li>
        </ul>
      </div>
      <div className="button-login" title="Đăng nhập">
        <a href="/">Đăng nhập</a>
      </div>
    </div>
  </div>
);
export default Header;
