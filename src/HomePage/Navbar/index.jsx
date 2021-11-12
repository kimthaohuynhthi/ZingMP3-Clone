// libs
import React from "react";
import { PoweroffOutlined, CloudUploadOutlined } from "@ant-design/icons";
// components
import NavbarMenu from "./mains/NavbarMenu";
// others
import "./style.scss";

const Navbar = () => (
  <div className="navbar-wrapper">
    <div className="navbar-wrapper-inner">
      <NavbarMenu />
      <div className="functional-menu">
        <a href="/" className="turn-off-ads" title="Bật quảng cáo">
          <PoweroffOutlined className="power-off-icon" />
          Tắt quảng cáo
        </a>
        <a href="/" className="upload-icon" title="Upload">
          <CloudUploadOutlined />
        </a>
      </div>
    </div>
  </div>
);
export default Navbar;
