import React from 'react';
import Header from '../Components/Header/Header';
import Player from '../Components/Player/Player';

import './App.css';

class App extends React.Component {

  state = {
    players: [
      {
        name: "Guil",
        id: 1
      },
      {
        name: "Ann",
        id: 2
      },
      {
        name: "Pollo el Diablo",
        id: 3
      },
      {
        name: "Dragon",
        id: 4
      }
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter( p => p.id !== id)
      };
    });
  }

  render () {
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          totalPlayers = {this.state.players.length}
        />

      {/*PLAYERS LIST*/}
      {this.state.players.map( player =>
        <Player
          name={player.name}
          id={player.id}
          key={player.id.toString()}
          removePlayer={this.handleRemovePlayer}
        />
      )}


      </div>
    );
  };
}

export default App;
