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

export const getNextSongsURL = createSelector(
  getMusic,
  ({ next }) => next,
);

export const getIsSearching = createSelector(
  getMusic,
  ({ searching }) => searching,
);

export const getTotalSongs = createSelector(
  getMusic,
  ({ total }) => total,
);

export const getHasSongs = createSelector(
  getSongs,
  songs => Boolean(songs.length),
);

export const getIsSongsFull = createSelector(
  getSongs,
  getTotalSongs,
  (songs, total) => songs.length === total,
);
