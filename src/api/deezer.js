const DEEZER_API_TRACK = 'http://api.deezer.com/search/track';

export const requestTracks = query => window
  .fetch(`https://cors-anywhere.herokuapp.com/${DEEZER_API_TRACK}?q=${query}`)
  .then(response => { console.log(response); return response; })
  .then(response => response.json())
