import { REQUEST_SEARCH, REQUEST_SEARCH_SUCCESS } from '../actions';

export const defaultMusicState = {
  query: '',
  songs: [],
  total: null,
  searching: false,
};

export default (state = defaultMusicState, action) => {
  switch (action.type) {
    case REQUEST_SEARCH:
      return {
        ...state,
        songs: [],
        total: null,
        query: action.payload.query,
        searching: true,
      };
    case REQUEST_SEARCH_SUCCESS:
      return {
        ...state,
        songs: action.payload.data,
        total: action.payload.total,
        searching: false,
      };
    default:
      return state;
  }
};
