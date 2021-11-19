// libs
import React from "react";
// image
import logo from "../../../../assets/Footer/logo.png";
// others
import "./style.scss";

const CompanyInfo = () => (
  <div className="company-info-wrapper">
    <img src={logo} alt="logo" />
    <div className="info-company">
      <p>
        © 2015 <span> VNG Corporation</span>
      </p>
      <p>Giấy phép MXH số 314/GP-BTTTT.</p>
    </div>
  </div>
);
export default CompanyInfo;
