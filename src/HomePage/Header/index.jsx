//libs
import React from "react";
//component
import { Input } from "antd";
//others
import logo from "../../assets/logo-zingmp3.png";
import "./style.scss";

const Header = () => (
  <div className="header-wrapper">
    <div className="header-wrapper-inner">
      <div className="header-logo">
        <a href="/" className="logo">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="header-search">
        <form className="search">
          <Input
            placeholder="Nhập nội dung cần tìm"
            style={{ width: 350, height: 25 }}
          />
          {/* Cần chỉnh sửa thành search */}
        </form>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="/" className="active">
              MP3
            </a>
          </li>
          <li>
            <a href="/">NEW</a>
          </li>
          <li>
            <a href="/">TV</a>
          </li>
          <li>
            <a href="/">ZALO PC</a>
          </li>
        </ul>
      </div>
      <div className="button-login">
        <a href="/">Đăng nhập</a>
      </div>
    </div>
  </div>
);
export default Header;
