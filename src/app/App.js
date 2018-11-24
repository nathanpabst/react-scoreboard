import React from 'react';
import Header from '../Components/Header/Header';
import Player from '../Components/Player/Player';

import './App.css';

class App extends React.Component {
  render () {
    return (
      <Header />,
      <Player />
    );
  };
}

export default App;
