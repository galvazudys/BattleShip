import React, {Component} from 'react';
import StartButton from '../components/StartButton';
import _ from 'lodash';
import SingleCell from '../components/SIngleCell';
import Score from '../components/Score';

class GameBoard extends Component {
    constructor() {
        super();
        this.state = {
            score: 0,
            hitsLEft: 17,
            gameState: {}
        }

    }

    startOrResetGame() {}

    clickedCell(row, col) {
        let hits = this.state.hitsLEft;
        let score = this.state.score;
        const tempArray = this.state.gameState
        if (this.props.shipData[row][col] !== null) {
            score += 3;
            hits--;
            this.setState({hitsLEft: hits, score: score})
            tempArray[row][col] = 'ship icon';
        } else {
            score--;
            this.setState({score: score});
            tempArray[row][col] = 'theme icon';

        }
        this.setState({gameState: tempArray});
    }

    componentDidMount() {
        this.setState({gameState: this.props.gameState});
    }
    render() {
        console.log(this.state.hitsLEft)
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