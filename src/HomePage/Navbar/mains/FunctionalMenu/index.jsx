// libs
import React from "react";
// components
import { PoweroffOutlined, CloudUploadOutlined } from "@ant-design/icons";
// others
import "./style.scss";

const FunctionMenu = () => (
  <div className="functional-menu-wrapper">
    <a href="#" className="turn-off-ads" title="Bật quảng cáo">
      <PoweroffOutlined className="power-off-icon" />
      Tắt quảng cáo
    </a>
    <a href="#" className="upload-icon" title="Upload">
      <CloudUploadOutlined />
    </a>
  </div>
);
export default FunctionMenu;
