// libs
import React from "react";
import SongCard from "../../components/SongCard";
// others
import "./style.scss";

const ListSong = () => (
  <div className="list-song-wrapper">
    {/* {songInTop.map((song) => (
      <ul className="top-song-wrapper-inner">
        <li key={song.id}>
          <SongCard
            topNumber={song.rank}
            numberTitle={song.number}
            image={song.img}
            songName={song.name}
            singerName={song.singer}
          />
        </li>
      </ul>
    ))} */}
    <ul className="list-song-wrapper-inner">
      <li>
        <SongCard
          topNumber="zing-chart"
          numberTitle="01"
          songName="Giá như anh nhìn lại"
          singerName="Bùi Anh Tuấn"
        />
      </li>
    </ul>
    <ul className="list-song-wrapper-inner">
      <li>
        <SongCard
          topNumber="zing-chart"
          numberTitle="01"
          songName="Giá như anh nhìn lại"
          singerName="Bùi Anh Tuấn"
        />
      </li>
    </ul>
    <ul className="list-song-wrapper-inner">
      <li>
        <SongCard
          topNumber="zing-chart"
          numberTitle="01"
          songName="Giá như anh nhìn lại"
          singerName="Bùi Anh Tuấn"
        />
      </li>
    </ul>
    <ul className="list-song-wrapper-inner">
      <li>
        <SongCard
          topNumber="zing-chart"
          numberTitle="01"
          songName="Giá như anh nhìn lại"
          singerName="Bùi Anh Tuấn"
        />
      </li>
    </ul>
    <ul className="list-song-wrapper-inner">
      <li>
        <SongCard
          topNumber="zing-chart"
          numberTitle="01"
          songName="Giá như anh nhìn lại"
          singerName="Bùi Anh Tuấn"
        />
      </li>
    </ul>
    <ul className="list-song-wrapper-inner">
      <li>
        <SongCard
          topNumber="zing-chart"
          numberTitle="01"
          songName="Giá như anh nhìn lại"
          singerName="Bùi Anh Tuấn"
        />
      </li>
    </ul>
    <ul className="list-song-wrapper-inner">
      <li>
        <SongCard
          topNumber="zing-chart"
          numberTitle="01"
          songName="Giá như anh nhìn lại"
          singerName="Bùi Anh Tuấn"
        />
      </li>
    </ul>
    <ul className="list-song-wrapper-inner">
      <li>
        <SongCard
          topNumber="zing-chart"
          numberTitle="01"
          songName="Giá như anh nhìn lại"
          singerName="Bùi Anh Tuấn"
        />
      </li>
    </ul>
    <ul className="list-song-wrapper-inner">
      <li>
        <SongCard
          topNumber="zing-chart"
          numberTitle="01"
          songName="Giá như anh nhìn lại"
          singerName="Bùi Anh Tuấn"
        />
      </li>
    </ul>
    <ul className="list-song-wrapper-inner">
      <li>
        <SongCard
          topNumber="zing-chart"
          numberTitle="01"
          songName="Giá như anh nhìn lại"
          singerName="Bùi Anh Tuấn"
        />
      </li>
    </ul>
  </div>
);
export default ListSong;
