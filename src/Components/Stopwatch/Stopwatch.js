import React from 'react';

class Stopwatch extends React.Component {
  render() {
    return(
      <div>
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">0</span>
        <button>Start</button>
        <button>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;