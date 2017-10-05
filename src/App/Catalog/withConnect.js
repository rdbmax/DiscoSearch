import { connect } from 'react-redux';
import { getIsSearching, getSongs } from 'store/selectors';

const mapStateToProps = state => ({
  isSearching: getIsSearching(state),
  songs: getSongs(state),
});

export default connect(mapStateToProps);
