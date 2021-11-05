import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import CooperationPartner from './CooperationPartner'
import Footer from './Footer'
import HotAlbum from './HotAlbum'
import HotArtist from './HotArtist'
import HotTopic from './HotTopic'
import HotVideo from './HotVideo'
import MusicForYou from './MusicForYou'
import MusicNews from './MusicNews'
import NewVietnameseSong from './NewVietnameseSong'
import PlaylistSuggestion from './PlaylistSuggestion'
import SongRanking from './SongRanking'
import WeeklyAlbumMVRangking from './WeeklyAlbumMVRanking'
import WeeklySongRanking from './WeeklySongRanking'

import './style.scss'

function index() {
  return (
    <div className="grid-container">
      <Header />
      <Navbar />
      <div className="main-wrapper">
        <div className="content">
          <div className="main">
            <div className="col-left">
              <SongRanking />
              <PlaylistSuggestion />
              <HotVideo />
              <HotAlbum />
              <div className="col">
                <div className="col-left" />
                <div className="col-right">
                  <NewVietnameseSong />
                </div>
              </div>
              <HotArtist />
            </div>
            <div className="col-right">
              <MusicForYou />
              <HotTopic />
              <WeeklySongRanking />
              <WeeklyAlbumMVRangking />
              <WeeklyAlbumMVRangking />
              <MusicNews />
            </div>
          </div>
          <CooperationPartner />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default index
