import React, {Component} from 'react';
import './App.css';
import GameBoard from './containers/GameBoard';
import Message from './components/Message';
import Score from './components/Score';
import data from './data/gameData'




class App extends Component {
  constructor(){
    super();
    this.state={}
  }

  
  componentWillMount() {
    this.setState(data);
  }
 

  
  render() {
    console.log(data);
    console.log(this.state)
    return (
      <div className="App">
        <Message></Message>
        <Score></Score>
        <h1>BattleShips</h1>
        <GameBoard  />
      </div>
    );
  }
}

export default App;
