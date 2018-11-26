import React, { PureComponent } from 'react';
import './Player.css';
import Counter from '../Counter/Counter';

class Player extends PureComponent {
//PureComponent improves performance by preventing unnecessary renders..PC's will only render when a change in props is detected.

  render () {
    console.log(this.props.name + ' rendered');
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
