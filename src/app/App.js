import React from 'react';
import Header from '../Components/Header/Header';
import Player from '../Components/Player/Player';

import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          totalPlayers = {1}
        />
        <Player name="Guil" score={50} />
        <Player name="Pollo el Diablo" score={35} />
        <Player name="Ann" score={35} />
        <Player name="Dragon" score={35} />

      </div>
    );
  };
}

export default App;
