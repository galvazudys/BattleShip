import React, {Component} from 'react';
import './App.css';
import GameBoard from './containers/GameBoard';
import Message from './components/Message';
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
        <h1
          style={{
          fontFamily: " 'VT323', monospace",
          padding: "0.5em",
          marginTop: "1em",
          textAlign: "center",
          fontSize: "80px",
          backgroundColor: "#27f966"
        }}>BattleShips
          <i className="ship icon"></i>
        </h1>
        <Message></Message>
        <GameBoard shipData={this.state.shipData} gameState={this.state.gameState}/>
      </div>
    );
  }
}

export default App;
