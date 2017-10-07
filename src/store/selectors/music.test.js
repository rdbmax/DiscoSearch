import { defaultMusicState } from '../reducers/music';
import { getIsSearching, getIsSongsFull } from './';

const defaultStore = { music: defaultMusicState };

test('getPageType should return currentPage', () => {
  expect(getIsSearching(defaultStore)).toBe(false);
});

test('getIsSongsFull should return correct boolean', () => {
  const storeFull = {
    music: {
      songs: [{}, {}, {}],
      total: 3,
    },
  };

  const storeNotFull = {
    music: {
      songs: [{}, {}],
      total: 3,
    },
  };
  expect(getIsSongsFull(storeFull)).toBe(true);
  expect(getIsSongsFull(storeNotFull)).toBe(false);
});
