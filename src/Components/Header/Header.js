import React from 'react';
import PropTypes from 'prop-types';
import Stats from '../Stats/Stats';
import Stopwatch from '../Stopwatch/Stopwatch';

import './Header.css';

//HEADER RECEIVES 'players' & 'title' PROPS. REMOVES THE NEED TO WRITE AS 'this.props...'
const Header = ({ players, title }) => {
  return (
    <header>
      <Stats players={ players } />
        <h1>{ title }</h1>
        <Stopwatch />
      </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.object)
};

// STATELESS CLASS..SEE REFACTOR ABOVE
// class Header extends React.Component {
//   render () {
//     return (
//       <header>
//         <Stats players={this.props.players} />
//         <h1>{this.props.title}</h1>
//         <Stopwatch />
//       </header>
//     );
//   }
// }


  export default Header;