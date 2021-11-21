//libs
import React from "react";
// dataSource
import listPartner from "../../dataSources/Partner";
//others
import "./style.scss";

const CooperationPartner = () => (
  <div className="cooperation-partner-wrapper">
    <div className="partner-title">ĐỐI TÁC</div>
    <ul className="partner-list">
      {listPartner.map((partner) => (
        <li key={partner.id}>
          <img src={partner.image} alt="partner" />
        </li>
      ))}
    </ul>
  </div>
);
export default CooperationPartner;
