import React from 'react';
import './Counter.css'

class Counter extends React.Component {
  render () {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">35</span>
        <button className="counter-action increment"> + </button>
      </div>

    );
  };
}

export default Counter;