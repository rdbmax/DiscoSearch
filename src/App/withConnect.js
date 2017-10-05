import { connect } from 'react-redux';
import { requestSearch } from 'store/actions';
import { getHasSongs } from 'store/selectors';

const mapStateToProps = state => ({
  hasSongs: getHasSongs(state),
});

const mapDispatchToProps = { requestSearch };

export default connect(mapStateToProps, mapDispatchToProps);
