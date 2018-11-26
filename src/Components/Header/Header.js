import React from 'react';
import Stats from '../Stats/Stats';
import Stopwatch from '../Stopwatch/Stopwatch';

import './Header.css';

class Header extends React.Component {
  render () {
    return (
      <header>
        <Stats players={this.props.players} />
        <h1>{this.props.title}</h1>
        <Stopwatch />
      </header>
    );
  }
}


  export default Header;