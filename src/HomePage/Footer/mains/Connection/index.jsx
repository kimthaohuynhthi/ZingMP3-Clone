//libs
import React from "react";
// dataSource
import { logoConnection } from "../../../../dataSources/Footer";
// image
import logoDMCA from "../../../../assets/Footer/dmca.png";
//others
import "./style.scss";

const Connection = () => (
  <div className="connection-wrapper">
    <div className="connection-wrapper-inner">
      {logoConnection.map((item) => (
        <a href="#" key={item.id}>
          <img src={item.image} alt={item.name} />
        </a>
      ))}
      <a href="#">
        <img className="logo-dmca" src={logoDMCA} alt="Dmca_protected" />
      </a>
      <a className="mobile-version" href="#">
        Phiên bản mobile
      </a>
    </div>
  </div>
);

export default Connection;
