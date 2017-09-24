import React, {Component} from 'react';
import StartButton from '../components/StartButton';
import _ from 'lodash';
import SingleCell from '../components/SIngleCell';
import Score from '../components/Score';
import Message from '../components/Message';
import logic from '../helpers/logic';

class GameBoard extends Component {
    constructor() {
        super();
        this.state = {
            score: 0,
            hitsLEft: 17,
            gameState: {},
            message: '',
            ships: {}
        }

    }

    startOrResetGame() {
        this.setState({score: 0, hitsLEft: 17, gameState: this.props.emptyGame, message: this.props.message});
    }

    clickedCell(row, col) {
        const game = logic.playGame(col, row, this.state.score, this.state.hitsLEft, this.state.ships, this.props.shipData, this.state.gameState);
        this.setState({gameState: game.gameBoardState, hitsLEft: game.totalHits, message: game.message, score: game.score});
    }

    componentDidMount() {
        this.setState({gameState: this.props.gameState, message: this.props.message.text, ships: this.props.ships});
    }
    render() {
        const row = _.map(this.state.gameState, (item, index) => {
            const cell = _.map(item, (item, key) => {
                if (item === null) {
                    item = ''
                }
                return (
                    <SingleCell
                        row={index}
                        col={key}
                        innerCell={item}
                        clickedCell={this
                        .clickedCell
                        .bind(this)}
                        key={key}></SingleCell>
                )
            })
            return (
                <tr key={index}>
                    {cell}
                </tr>
            );

        });
        return (
            <div>
                <Score score={this.state.score}></Score>
                <Message message={this.state.message}></Message>
                <table
                    style={{
                    border: "solid 2px #555",
                    backgroundColor: "#27f966",
                    margin: "auto",
                    boxShadow: "4px 6px 5px 0px rgba(50, 50, 50, 0.87)"
                }}>
                    <tbody >
                        {row}
                    </tbody>
                </table>
                <StartButton
                    startGame={() => this.startOrResetGame(this)}
                    hits={this.state.hitsLEft}></StartButton>
            </div>
        );
    }
}

export default GameBoard;