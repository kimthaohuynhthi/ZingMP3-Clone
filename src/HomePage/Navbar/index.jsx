// libs
import React from "react";
import {
  PoweroffOutlined,
  CloudUploadOutlined,
  HomeFilled,
} from "@ant-design/icons";
// dataSources
import menuNavbar from "../../dataSources/Navbar";
// others
import "./style.scss";

const Navbar = () => (
  <div className="navbar-wrapper">
    <div className="navbar-wrapper-inner">
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
      <div className="functional-menu">
        <select
          className="select-languages"
          // defaultValue={locale}
          // onChange={(e) => setLocale(e.target.value)}
        >
          <option value="vi">Tiếng Việt</option>
          <option value="en">Asâs</option>
        </select>
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
