import { defaultMusicState } from '../reducers/music';
import { getIsSearching } from './';

const defaultStore = { music: defaultMusicState };

test('getPageType should return currentPage', () => {
  expect(getIsSearching(defaultStore)).toBe(false);
});
