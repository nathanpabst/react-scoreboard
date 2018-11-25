import React from 'react';
import './Player.css';
import Counter from '../Counter/Counter';

class Player extends React.Component {

  render () {
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={ () => this.props.removePlayer(this.props.id)}>✖</button>
          {this.props.name}
        </span>
        <Counter
          score={this.props.score}
          index={this.props.index}
          changeScore={this.props.changeScore}
        />
      </div>
    );
  };
}

export default Player;
