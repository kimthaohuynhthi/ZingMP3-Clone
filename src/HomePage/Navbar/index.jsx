//libs
import React from "react";
import {
  HomeFilled,
  PoweroffOutlined,
  CloudUploadOutlined,
} from "@ant-design/icons";
//others
import "./style.scss";

const Navbar = () => (
  <div className="navbar-wrapper">
    <div className="navbar-wrapper-inner">
      <div className="personal-music-menu">
        <ul>
          <li>
            <a href="/" className="home-icon">
              <HomeFilled
                style={{ color: "#333333", fontSize: 20, marginTop: 10 }}
              />
            </a>
          </li>
          <li>
            <a href="/" className="personal-music">
              Nhạc cá nhân
            </a>
          </li>
          <li>
            <a href="/">#zingchart</a>
          </li>
          <li>
            <a href="/">Top 100</a>
          </li>
          <li>
            <a href="/">Chủ đề</a>
          </li>
          <li>
            <a href="/">Video</a>
          </li>
          <li>
            <a href="/">Album</a>
          </li>
          <li>
            <a href="/">Nghệ sĩ</a>
          </li>
          <li>
            <a href="/">Vip</a>
          </li>
        </ul>
      </div>
      <div className="functional-menu">
        <a href="/" className="turn-off-ads">
          <PoweroffOutlined
            style={{ fontSize: 16, marginTop: 10, marginRight: 10 }}
          />
          Tắt quảng cáo
        </a>
        <a href="/" className="upload-icon">
          <CloudUploadOutlined style={{ fontSize: 20 }} />
        </a>
      </div>
    </div>
  </div>
);
export default Navbar;
