// libs
import React from "react";
import { Input } from "antd";
// others
import "./style.scss";

const HeaderSearch = () => (
  <div className="header-search-wrapper">
    <Input className="header-search" placeholder="Nhập nội dung cần tìm" />
  </div>
);
export default HeaderSearch;
