import { connect } from 'react-redux';
import { requestSearch } from 'store/actions';
import { getHasSongs, getIsSearching } from 'store/selectors';

const mapStateToProps = state => ({
  centerElement: !getHasSongs(state) && !getIsSearching(state),
});

const mapDispatchToProps = { requestSearch };

export default connect(mapStateToProps, mapDispatchToProps);
