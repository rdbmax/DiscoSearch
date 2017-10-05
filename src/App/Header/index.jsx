import React from 'react';
import Search from './Search/index.jsx';

const CONTAINER_STYLE = {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: '10px',
};

const TITLE_STYLE = {
  color: 'white',
  margin: 0,
  fontFamily: 'Oswald, sans-serif',
};

const Title = () => (
  <div style={CONTAINER_STYLE}>
    <h1 style={TITLE_STYLE}>Disco Search</h1>

    <Search />
  </div>
);

export default Title;
