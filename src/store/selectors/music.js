import { createSelector } from 'reselect';

const getMusic = state => state.music;

export const getQuery = createSelector(
  getMusic,
  ({ query }) => query,
);

export const getSongs = createSelector(
  getMusic,
  ({ songs }) => songs,
);

export const getHasSongs = createSelector(
  getSongs,
  songs => Boolean(songs.length),
);

export const getIsSearching = createSelector(
  getMusic,
  ({ searching }) => searching,
);
