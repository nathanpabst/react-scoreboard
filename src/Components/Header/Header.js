import React from 'react';
import './Header.css';

class Header extends React.Component {
  render () {
    return (
      <header>
        <h1>Scoreboard</h1>
        <span className="stats">Players: 1</span>
      </header>
    );
  }
}


  export default Header;