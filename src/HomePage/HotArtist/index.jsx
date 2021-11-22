//libs
import React from "react";
// components
import Title from "../../components/Title";
import ImageCard from "../../components/ImageCard";
import image from "../../assets/Artist/singer9.jpg";
// mock
import listArtist from "../../mocks/ListArtist";
//others
import "./style.scss";

const HotArtist = () => (
  <div className="hot-artist-wrapper">
    <div className="hot-artist-wrapper-inner">
      <Title titleName="NGHỆ SĨ HOT" fontSize="24px" />
      <ImageCard
        className="first-image"
        name="Phan Mạnh Quỳnh"
        image={image}
        width="210px"
        height="215px"
      />
      <ul>
        {listArtist.map((singer) => (
          <li key={singer.id}>
            <ImageCard
              name={singer.name}
              image={singer.img}
              width="100px"
              height="100px"
            />
          </li>
        ))}
      </ul>
    </div>
  </div>
);
export default HotArtist;
