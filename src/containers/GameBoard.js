import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StartButton from '../components/StartButton';
import _ from 'lodash';
import SingleCell from '../components/SIngleCell';
import Score from '../components/Score';
import Message from '../components/Message';
import logic from '../helpers/logic';
import * as firebase from 'firebase';
import ScoreBoard from '../components/ScoreBoard';
class GameBoard extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      hitsLEft: 17,
      gameState: {},
      message: '',
      ships: {},
      shipData: {},
      timer: 0,
      minuteTime: 0,
      oldGameData:[]
    };
  }

  updateTimer(time) {
    this.setState({ timer: time });
  }

  startOrResetGame() {
    const database = firebase.database();
    database.ref('randomGames').on('value', snapShot => {
      let newGame = JSON.parse(snapShot.val()[Math.floor(Math.random() * 5)]);
      this.setState({ shipData: newGame });
    });
    const emptyGame = this.props.emptyGame;
    this.setState({
      score: 0,
      hitsLEft: 17,
      gameState: emptyGame,
      message: ''
    });
    let timer = 0;
    let minutes = 0;
    setInterval(() => {
      if (timer === 60) {
        minutes++;
        timer = 0;
      }
      timer++;
      this.setState({ timer: timer, minuteTime: minutes });
    }, 1000);
  }

  clickedCell(row, col) {
    const game = logic.playGame(
      col,
      row,
      this.state.score,
      this.state.hitsLEft,
      this.state.ships,
      this.state.shipData,
      this.state.gameState
    );
    this.setState({
      gameState: game.gameBoardState,
      hitsLEft: game.totalHits,
      message: game.message,
      score: game.score
    });
    if (game.gameEnded) {
      const gameData = {
        score:this.state.score,
        minutes:this.state.minuteTime,
        seconds:this.state.timer
      }
      const gameDataArray = this.state.oldGameData;
      gameDataArray.push(gameData);
      localStorage.setItem(
        'gameData',
        JSON.stringify(gameDataArray)
      );
    }
  }

  componentDidMount() {
    const database = firebase.database();
    database.ref('randomGames').on('value', snapShot => {
      let newGame = JSON.parse(snapShot.val()[Math.floor(Math.random() * 5)]);
      this.setState({ shipData: newGame });
    });
    this.setState({
      gameState: this.props.gameState,
      message: this.props.message.text,
      ships: this.props.ships,
      shipData: this.props.shipData
    });
    const gameScore = localStorage.getItem('gameData');
    this.setState({oldGameData:JSON.parse(gameScore)});
  }
  render() {
    const row = _.map(this.state.gameState, (item, index) => {
      const cell = _.map(item, (item, key) => {
        if (item === null) {
          item = '';
        }
        return (
          <SingleCell
            row={index}
            col={key}
            innerCell={item}
            clickedCell={this.clickedCell.bind(this)}
            key={key}
          />
        );
      });
      return <tr key={index}>{cell}</tr>;
    });
    return (
      <div>
        <Score score={this.state.score} />
        <Message message={this.state.message} />
        <ScoreBoard
          oldGame={this.state.oldGameData}
          minutes={this.state.minuteTime}
          timer={this.state.timer}
          score={this.state.score}
        />
        <table
          style={{
            border: 'solid 2px #555',
            backgroundColor: 'rgba(39, 249, 102,0.7)',
            margin: 'auto',
            boxShadow: '4px 6px 5px 0px rgba(50, 50, 50, 0.87)'
          }}>
          <tbody>{row}</tbody>
        </table>
        <StartButton
          startGame={() => this.startOrResetGame(this)}
          hits={this.state.hitsLEft}
        />
      </div>
    );
  }
}

GameBoard.propTypes = {
  ships: PropTypes.object.isRequired,
  emptyGame: PropTypes.arrayOf(PropTypes.array).isRequired,
  message: PropTypes.object.isRequired,
  shipData: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
  gameState: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired
};

export default GameBoard;
