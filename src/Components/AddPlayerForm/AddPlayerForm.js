import React from 'react';

class AddPlayerForm extends React.Component {
//REFACTORING TO USE React.createRef..EASY AND QUICK WAY TO GET THE VALUE OF AN INPUT FIELD
//createRef will only render once...good if you don't need to capture each keystroke
playerInput = React.createRef;

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.playerInput.current.value);
    e.currentTarget.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          ref={this.playerInput}
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

//CODE EXAMPLE USING createRef INSIDE A FUNCTIONAL COMPONENT
// const AddPlayerForm = ({ addPlayer }) => {

//   let playerInput = React.createRef();
//   let handleSubmit = (e) => {
//     e.preventDefault();
//     addPlayer(playerInput.current.value);
//     e.currentTarget.reset();
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         ref={playerInput}
//         placeholder="Enter a player's name"
//       />

//       <input
//         type="submit"
//         value="Add Player"
//       />
//     </form>
//   );
// }