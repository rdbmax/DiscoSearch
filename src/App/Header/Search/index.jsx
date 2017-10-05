import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withConnect from './withConnect';

const getInputStyle = hasSongs => ({
  position: 'absolute',
  right: hasSongs ? '90px' : 'calc(50% - 130px)',
  top: hasSongs ? '22px' : '50%',
  border: '0',
  padding: '10px',
  fontSize: '16px',
  width: '260px',
  transition: 'right 0.3s ease-in-out, top 0.3s ease-in-out',
  zIndex: '11',
  transform: hasSongs ? 'none' : 'translateY(-50%)',
});

const getButtonStyle = hasSongs => ({
  position: 'absolute',
  right: hasSongs ? '20px' : 'calc(50% - 190px)',
  top: hasSongs ? '21px' : '50%',
  fontSize: '20px',
  WebkitAppearance: 'none',
  background: 'rgb(170, 167, 188)',
  border: '0',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  cursor: 'pointer',
  transition: 'right 0.3s ease-in-out, top 0.3s ease-in-out',
  zIndex: '11',
  transform: hasSongs ? 'none' : 'translateY(-50%)',
});

@withConnect
class Search extends Component {
  static propTypes = {
    requestSearch: PropTypes.func.isRequired,
    hasSongs: PropTypes.bool.isRequired,
  }

  state = {
    typed: '',
  }

  onSearch = () => {
    this.props.requestSearch(this.state.typed);
  }

  onChangeInput = e => {
    this.setState({
      typed: e.target.value,
    })
  }

  render() {
    const { typed } = this.state;
    const { hasSongs } = this.props;

    return [
      <input
        key='search-input'
        type='text'
        style={getInputStyle(hasSongs)}
        value={typed}
        onChange={this.onChangeInput}
      />,
      <button key='search-button' style={getButtonStyle(hasSongs)} onClick={this.onSearch}>🔍</button>,
    ];
  }
}

export default Search;
