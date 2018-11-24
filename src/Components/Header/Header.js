import React from 'react';
import './Header.css';

class Header extends React.Component {
  render () {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <span className="stats">Players: {this.props.totalPlayers}</span>
      </header>
    );
  }
}


  export default Header;