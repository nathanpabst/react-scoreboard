import React from 'react';
import Header from '../Components/Header/Header';
import Player from '../Components/Player/Player';

import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="scoreboard">
        <Header />
        <Player />
      </div>
    );
  };
}

export default App;
