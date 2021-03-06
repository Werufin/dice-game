import './App.css';
import React from 'react';
import Board from './Components/Board'
import './tailwind.css'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      p1Turn: true,
      p2Turn: false,
    }

    this.swapTurn = this.swapTurn.bind(this)
  }

  swapTurn = () => {
    this.setState(state => ({
      p1Turn: !this.state.p1Turn,
      p2Turn: !this.state.p2Turn
    }));
  }

  render() {
    return (
      <div className="min-h-screen bg-gray-100 py-6 flex content-center">
        <Board playerName="Player 1" myTurn={this.state.p1Turn} endTurn={this.swapTurn} />
        <Board playerName="Player 2" myTurn={this.state.p2Turn} endTurn={this.swapTurn} />
      </div>
    );
  }
}

export default App;
