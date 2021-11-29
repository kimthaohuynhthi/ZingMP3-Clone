//libs
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// components
import Title from "../../components/Title";
import ImageCard from "../../components/ImageCard";
import image from "../../assets/Artist/singer9.jpg";
//actions
import { fetchArtist } from "../../redux/actions/fetchData";
// mock
import listArtist from "../../mocks/ListArtist";
//others
import "./style.scss";

const HotArtist = () => {
  const dispatch = useDispatch();
  const stateArtist = useSelector((state) => state.dataReducer.dataArtist);

  useEffect(() => {
    dispatch(fetchArtist(listArtist));
  }, []);

  return (
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
          {stateArtist.map((singer) => (
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
};

export default HotArtist;
