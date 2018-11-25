import React from 'react';

class AddPlayerForm extends React.Component {
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Enter a player's name"
        />
        <input
          type="submit"
          value="Add Player"
        />
        </form>
    );
  }
}

export default AddPlayerForm