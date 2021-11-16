// libs
import React from "react";
// components
import Title from "../../../../components/Title";
import MenuZingChart from "../../../../components/MenuZingChart";
// others
import "./style.scss";

const WeekyMVRanking = () => (
  <div className="weekly-mv-ranking-wrapper">
    <div className="weekly-mv-ranking-wrapper-inner">
      <Title
        titleName="#ZINGCHART TUẦN - BÀI HÁT"
        fontSize="18px"
        isShow="true"
      />
      <MenuZingChart />
    </div>
  </div>
);
export default WeekyMVRanking;
