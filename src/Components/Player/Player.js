import React from 'react';
import './Player.css';
import Counter from '../Counter/Counter';

class Player extends React.Component {
  render () {
    return (
      <div className="player">
        <span className="player-name">
          {this.props.name}
        </span>
        <Counter
          score={50}
        />
      </div>
    );
  };
}

export default Player;
