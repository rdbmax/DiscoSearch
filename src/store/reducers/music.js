import {
  REQUEST_SEARCH, REQUEST_SEARCH_SUCCESS,
  REQUEST_FETCH_NEXT_SONGS, REQUEST_FETCH_NEXT_SONGS_SUCCESS,
} from '../actions';

export const defaultMusicState = {
  query: '',
  songs: [],
  total: 0,
  searching: false,
  next: null,
};

export default (state = defaultMusicState, action) => {
  switch (action.type) {
    case REQUEST_SEARCH:
      return {
        ...defaultMusicState,
        query: action.payload.query,
        searching: true,
      };
    case REQUEST_SEARCH_SUCCESS:
      return {
        ...state,
        songs: action.payload.data,
        total: action.payload.total,
        searching: false,
        next: action.payload.next,
      };
    case REQUEST_FETCH_NEXT_SONGS:
      return {
        ...state,
        searching: true,
      };
    case REQUEST_FETCH_NEXT_SONGS_SUCCESS:
      return {
        ...state,
        songs: [...state.songs, ...action.payload.data],
        total: action.payload.total,
        searching: false,
        next: action.payload.next,
      };
    default:
      return state;
  }
};
