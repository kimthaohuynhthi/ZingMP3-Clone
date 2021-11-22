// libs
import React from "react";
// components
import CompanyInfo from "./mains/CompanyInfo";
import Connection from "./mains/Connection";
import MenuFooter from "./mains/MenuFooter";
// others
import "./style.scss";

const Footer = () => (
  <div className="footer-wrapper">
    <div className="footer-wrapper-inner">
      <CompanyInfo />
      <MenuFooter />
      <Connection />
    </div>
  </div>
);
export default Footer;
