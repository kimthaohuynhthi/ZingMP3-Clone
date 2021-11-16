// libs
import React from "react";
// image
import background from "../../../../assets/MusicForYou/background.png";
// others
import "./style.scss";

const BackgroundImage = () => (
  <div className="background-image-wrapper">
    <div className="background-image-wrapper-inner">
      <img alt="background" src={background} />
    </div>
  </div>
);
export default BackgroundImage;
