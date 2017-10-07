import { connect } from 'react-redux';
import { getIsSearching, getSongs, getIsSongsFull, getTotalSongs } from 'store/selectors';
import { fetchNextSongs } from 'store/actions';

const mapStateToProps = state => ({
  isSearching: getIsSearching(state),
  songs: getSongs(state),
  isFull: getIsSongsFull(state),
  totalSongs: getTotalSongs(state),
});

const mapDispatchToProps = {
  fetchNextSongs,
};

export default connect(mapStateToProps, mapDispatchToProps);
