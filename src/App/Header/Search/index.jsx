import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withConnect from './withConnect';

const INPUT_STYLE = {
  position: 'absolute',
  right: '80px',
  top: '50%',
  transform: 'translateY(-50%)',
  border: '0',
  padding: '10px',
  fontSize: '16px',
  width: '260px',
};

const BUTTON_STYLE = {
  position: 'absolute',
  right: '10px',
  top: '50%',
  transform: 'translateY(-50%)',
  fontSize: '20px',
  WebkitAppearance: 'none',
  background: 'rgb(170, 167, 188)',
  border: '0',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  cursor: 'pointer',
};

@withConnect
class Search extends Component {
  static propTypes = {
    requestSearch: PropTypes.func.isRequired,
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

    return [
      <input
        key='search-input'
        type='text'
        style={INPUT_STYLE}
        value={typed}
        onChange={this.onChangeInput}
      />,
      <button key='search-button' style={BUTTON_STYLE} onClick={this.onSearch}>🔍</button>,
    ];
  }
}

export default Search;
