import React from 'react';
import Header from '../Components/Header/Header';
import Player from '../Components/Player/Player';

import './App.css';

const players = [
  {
    name: "Guil",
    score: 50
  },
  {
    name: "Ann",
    score: 35
  },
  {
    name: "Pollo el Diablo",
    score: 35
  },
  {
    name: "Dragon",
    score: 35
  }
];

class App extends React.Component {
  render () {
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          totalPlayers = {1}
        />
        <Player initialPlayers={players} />

        <Player
          name={players.name}
          score={players.score}
        />


      </div>
    );
  };
}

export default App;
