//libs
import React from "react";
//component
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import CooperationPartner from './CooperationPartner'
// import HotAlbum from './HotAlbum'
// import HotArtist from './HotArtist'
// import HotTopic from './HotTopic'
// import HotVideo from './HotVideo'
// import MusicForYou from './MusicForYou'
// import MusicNews from './MusicNews'
// import NewVietnameseSong from './NewVietnameseSong'
// import PlaylistSuggestion from './PlaylistSuggestion'
// import SongRanking from './SongRanking'
// import WeeklyAlbumMVRanking from './WeeklyAlbumMVRanking'
// import WeeklySongRanking from './WeeklySongRanking'
//others
import "./style.scss";

const HomePage = () => (
  <div className="main-wrapper">
    <Header />
    <Navbar />
    <div className="content-body-wrapper">
      <div className="content-body-wrapper-inner">BCBC</div>
    </div>
    <Footer />
  </div>
);
export default HomePage;
