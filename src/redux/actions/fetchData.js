import * as action from "../actionTypes";

export const fetchAlbumHot = (data) => ({
  type: action.FETCH_ALBUM_HOT,
  payload: data,
});

export const fetchVideoHot = (data) => ({
  type: action.FETCH_VIDEO_HOT,
  payload: data,
});

export const fetchMusicNews = (data) => ({
  type: action.FETCH_MUSIC_NEWS,
  payload: data,
});

export const fetchSongInTop = (data) => ({
  type: action.FETCH_SONG_IN_TOP,
  payload: data,
});

export const fetchZingChartSong = (data) => ({
  type: action.FETCH_ZING_CHART_SONG,
  payload: data,
});

export const fetchZingChartMV = (data) => ({
  type: action.FETCH_ZING_CHART_MV,
  payload: data,
});

export const fetchZingChartAlbum = (data) => ({
  type: action.FETCH_ZING_CHART_ALBUM,
  payload: data,
});

export const fetchVietnameseSong = (data) => ({
  type: action.FETCH_VIETNAMESE_SONG,
  payload: data,
});

export const fetchArtist = (data) => ({
  type: action.FETCH_HOT_ARTIST,
  payload: data,
});

export const fetchPlaylist = (data) => ({
  type: action.FETCH_PLAYLIST,
  payload: data,
});
