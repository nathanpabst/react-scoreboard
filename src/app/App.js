import React from 'react';
import Header from '../Components/Header/Header';
import Player from '../Components/Player/Player';
import AddPlayerForm from '../Components/AddPlayerForm/AddPlayerForm';
import './App.css';

class App extends React.Component {

  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Ann",
        score: 0,
        id: 2
      },
      {
        name: "Pollo el Diablo",
        score: 0,
        id: 3
      },
      {
        name: "Dragon",
        score: 0,
        id: 4
      }
    ]
  };

  // player id counter
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  handleAddPlayer = (name) => {
    this.setState({
      players: [
        ...this.state.players,
        {
          name,
          score: 0,
          id: this.prevPlayerId += 1
        }
      ]
    });
  }

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
          players={this.state.players}
        />

      {/*PLAYERS LIST*/}
      {this.state.players.map( (player, index) =>
        <Player
          name={player.name}
          score={player.score}
          id={player.id}
          key={player.id.toString()}
          index={index}
          changeScore={this.handleScoreChange}
          removePlayer={this.handleRemovePlayer}

        />
      )}

        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  };
}

export default App;
