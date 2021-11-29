// libs
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// components
import Title from "../../components/Title";
import VietNameseSongCard from "./components/VietnameseSongCard";
//actions
import { fetchVietnameseSong } from "../../redux/actions/fetchData";
// mock
import listVietnameseSong from "../../mocks/VietnameseSong";
// others
import "./style.scss";

const NewVietnameseSong = () => {
  const dispatch = useDispatch();
  const stateVietnameseSong = useSelector(
    (state) => state.dataReducer.dataVietnameseSong
  );

  useEffect(() => {
    dispatch(fetchVietnameseSong(listVietnameseSong));
  }, []);

  return (
    <div className="new-song-wrapper">
      <Title titleName="NHẠC VIỆT MỚI" fontSize="24px" />
      <ul>
        {stateVietnameseSong.map((song) => (
          <li key={song.id}>
            <VietNameseSongCard
              songName={song.name}
              singerName={song.singer}
              image={song.img}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewVietnameseSong;
