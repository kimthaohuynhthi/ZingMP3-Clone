import { actionTypes } from "../types/index";

const initialState = {
  dataAlbum: [],
  dataVideo: [],
  dataNews: [],
  dataSongInTop: [],
  dataZingChartSong: [],
  dataZingChartMV: [],
  dataZingChartAlbum: [],
  dataVietnameseSong: [],
  dataArtist: [],
  dataPlaylist: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALBUM_HOT:
      return {
        ...state,
        dataAlbum: action.payload,
      };
    case actionTypes.FETCH_VIDEO_HOT:
      return {
        ...state,
        dataVideo: action.payload,
      };
    case actionTypes.FETCH_MUSIC_NEWS:
      return {
        ...state,
        dataNews: action.payload,
      };
    case actionTypes.FETCH_SONG_IN_TOP:
      return {
        ...state,
        dataSongInTop: action.payload,
      };
    case actionTypes.FETCH_ZING_CHART_SONG:
      return {
        ...state,
        dataZingChartSong: action.payload,
      };
    case actionTypes.FETCH_ZING_CHART_MV:
      return {
        ...state,
        dataZingChartMV: action.payload,
      };
    case actionTypes.FETCH_ZING_CHART_ALBUM:
      return {
        ...state,
        dataZingChartAlbum: action.payload,
      };
    case actionTypes.FETCH_VIETNAMESE_SONG:
      return {
        ...state,
        dataVietnameseSong: action.payload,
      };
    case actionTypes.FETCH_HOT_ARTIST:
      return {
        ...state,
        dataArtist: action.payload,
      };
    case actionTypes.FETCH_PLAYLIST:
      return {
        ...state,
        dataPlaylist: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
