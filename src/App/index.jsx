import React from 'react';
import 'bubbly-bg/dist/bubbly-bg.js';
import Header from './Header/index.jsx';
import Catalog from './Catalog/index.jsx';

bubbly({
  colorStart: '#4c004c',
  colorStop: '#1a001a',
  bubbleFunc: () => `hsla(${Math.random() * 360}, 100%, 50%, ${Math.random() * 0.25})`,
});

const App = () => [
  <Header key='header' />,
  <Catalog key='catalog' />,
];

export default App;
