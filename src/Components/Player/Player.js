import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from '../Counter/Counter';

import './Player.css';

class Player extends PureComponent {
//PureComponent improves performance by preventing unnecessary renders..PC's will only render when a change in props is detected.

  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: this.PropTypes.func,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number
  };

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
