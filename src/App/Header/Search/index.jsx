import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withConnect from './withConnect';

const getInputStyle = centerElement => ({
  position: 'absolute',
  right: centerElement ? 'calc(50% - 130px)' : '90px',
  top: centerElement ? '50%' : '22px',
  border: '0',
  padding: '10px',
  fontSize: '16px',
  width: '260px',
  transition: 'right 0.3s ease-in-out, top 0.3s ease-in-out',
  zIndex: '11',
  transform: centerElement ? 'translateY(-50%)' : 'none',
});

const getButtonStyle = centerElement => ({
  position: 'absolute',
  right: centerElement ? 'calc(50% - 190px)' : '20px',
  top: centerElement ? '50%' : '21px',
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
  transform: centerElement ? 'translateY(-50%)' : 'none',
});

@withConnect
class Search extends Component {
  static propTypes = {
    requestSearch: PropTypes.func.isRequired,
    centerElement: PropTypes.bool.isRequired,
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
    const { centerElement } = this.props;

    return [
      <input
        key='search-input'
        type='text'
        style={getInputStyle(centerElement)}
        value={typed}
        onChange={this.onChangeInput}
      />,
      <button key='search-button' style={getButtonStyle(centerElement)} onClick={this.onSearch}>🔍</button>,
    ];
  }
}

export default Search;
