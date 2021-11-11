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
            <a href="/" className="home-icon" title="Zing MP3">
              <HomeFilled
                style={{ color: "#333333", fontSize: 20, marginTop: 10 }}
              />
            </a>
          </li>
          <li>
            <a href="/" className="personal-music" title="Nhạc cá nhân">
              Nhạc cá nhân
            </a>
          </li>
          <li>
            <a href="/" title="Zing Chart">
              #zingchart
            </a>
          </li>
          <li>
            <a href="/" title="Top 100">
              Top 100
            </a>
          </li>
          <li>
            <a href="/" title="Chủ đề">
              Chủ đề
            </a>
          </li>
          <li>
            <a href="/" title="Video">
              Video
            </a>
          </li>
          <li>
            <a href="/" title="Album">
              Album
            </a>
          </li>
          <li>
            <a href="/" title="Nghệ sĩ">
              Nghệ sĩ
            </a>
          </li>
          <li>
            <a href="/" title="Zing MP3 VIP">
              VIP
            </a>
          </li>
        </ul>
      </div>
      <div className="functional-menu">
        <a href="/" className="turn-off-ads" title="Bật quảng cáo">
          <PoweroffOutlined
            style={{ fontSize: 14, marginTop: 12, marginRight: 5 }}
          />
          Tắt quảng cáo
        </a>
        <a href="/" className="upload-icon" title="Upload">
          <CloudUploadOutlined style={{ fontSize: 20 }} />
        </a>
      </div>
    </div>
  </div>
);
export default Navbar;
