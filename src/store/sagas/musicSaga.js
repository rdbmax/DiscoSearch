import { put, takeLatest, select } from 'redux-saga/effects';
import { requestTracks, requestNextTracks } from 'api/deezer';
import {
  REQUEST_SEARCH, REQUEST_SEARCH_SUCCESS,
  REQUEST_FETCH_NEXT_SONGS, REQUEST_FETCH_NEXT_SONGS_SUCCESS,
} from '../actions/index';
import { getNextSongsURL } from '../selectors/index';

function* fetchDeezerQuery({ payload: { query } }) {
  const songs = yield requestTracks(query);
  yield put({ type: REQUEST_SEARCH_SUCCESS, payload: songs });
}

function* fetchNextSongs() {
  const url = yield select(getNextSongsURL);
  const songs = yield requestNextTracks(url);
  yield put({ type: REQUEST_FETCH_NEXT_SONGS_SUCCESS, payload: songs });
}

function* mySaga() {
  yield takeLatest(REQUEST_SEARCH, fetchDeezerQuery);
  yield takeLatest(REQUEST_FETCH_NEXT_SONGS, fetchNextSongs);
}

export default mySaga;
