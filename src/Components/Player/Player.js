import React, { PureComponent } from 'react';
import './Player.css';
import Counter from '../Counter/Counter';

class Player extends PureComponent {
//PureComponent improves performance by preventing unnecessary renders..PC's will only render when a change in props is detected.

  render () {
    //WHEN DESTRUCTURING A CLASS, USE VARIABLE ASSIGNMENT
    const {
      name,
      id,
      score,
      index,
      removePlayer,
      changeScore
    } = this.props;

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={ () => removePlayer(id)}>✖</button>
          { name }
        </span>
        <Counter
          score={ score }
          index={ index }
          changeScore={ changeScore }
        />
      </div>
    );
  };
}

export default Player;
