export const REQUEST_SEARCH = 'REQUEST_SEARCH';
export const REQUEST_SEARCH_SUCCESS = 'REQUEST_SEARCH_SUCCESS';

export const requestSearch = query => ({
  type: REQUEST_SEARCH,
  payload: { query },
});

export const requestSearchSuccess = data => ({
  type: REQUEST_SEARCH_SUCCESS,
  payload: data,
});
