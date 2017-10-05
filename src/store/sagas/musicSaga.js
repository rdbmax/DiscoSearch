import { put, takeLatest } from 'redux-saga/effects';
import { requestTracks } from 'api/deezer';
import { REQUEST_SEARCH, REQUEST_SEARCH_SUCCESS } from '../actions/index';

function* fetchDeezerQuery({ payload: { query } }) {
  const songs = yield requestTracks(query);
  console.log('songs', songs)
  yield put({ type: REQUEST_SEARCH_SUCCESS, payload: songs });
}

function* mySaga() {
  yield takeLatest(REQUEST_SEARCH, fetchDeezerQuery);
}

export default mySaga;
