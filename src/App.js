import React, {Component} from 'react';
import './App.css';
import GameBoard from './containers/GameBoard';
import Message from './components/Message';
import Score from './components/Score';
import data from './data/gameData'

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentWillMount() {
    this.setState(data);
  }

  render() {
    
    return (
      <div className="App">
        <Message></Message>
        <Score></Score>
        <h1>BattleShips</h1>
        <GameBoard shipData={this.state.shipData} gameState={this.state.gameState}/>
      </div>
    );
  }
}

export default App;
