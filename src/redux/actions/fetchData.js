import { actionTypes } from "../types/index";

export const fetchAlbumHot = (data) => ({
  type: actionTypes.FETCH_ALBUM_HOT,
  payload: data,
});

export const fetchVideoHot = (data) => ({
  type: actionTypes.FETCH_VIDEO_HOT,
  payload: data,
});

export const fetchMusicNews = (data) => ({
  type: actionTypes.FETCH_MUSIC_NEWS,
  payload: data,
});

export const fetchSongInTop = (data) => ({
  type: actionTypes.FETCH_SONG_IN_TOP,
  payload: data,
});

export const fetchZingChartSong = (data) => ({
  type: actionTypes.FETCH_ZING_CHART_SONG,
  payload: data,
});

export const fetchZingChartMV = (data) => ({
  type: actionTypes.FETCH_ZING_CHART_MV,
  payload: data,
});

export const fetchZingChartAlbum = (data) => ({
  type: actionTypes.FETCH_ZING_CHART_ALBUM,
  payload: data,
});

export const fetchVietnameseSong = (data) => ({
  type: actionTypes.FETCH_VIETNAMESE_SONG,
  payload: data,
});

export const fetchArtist = (data) => ({
  type: actionTypes.FETCH_HOT_ARTIST,
  payload: data,
});

export const fetchPlaylist = (data) => ({
  type: actionTypes.FETCH_PLAYLIST,
  payload: data,
});
