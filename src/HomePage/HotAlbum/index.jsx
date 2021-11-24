// libs
import React from "react";
// components
import Title from "../../components/Title";
import ListAlbum from "./mains/ListAlbum";
import Pagination from "../../components/Pagination";
// others
import "./style.scss";

const HotAlbum = () => (
  <div className="hot-album-wrapper">
    <Title className="title" titleName="ALBUM HOT" fontSize="26px" />
    <ListAlbum />
    <Pagination />
  </div>
);
export default HotAlbum;
