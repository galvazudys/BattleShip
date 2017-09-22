import React, { Component } from 'react';
import HitsDisplay from '../components/HitsDisplay';
import StartButton from '../components/StartButton'

class GameBoard extends Component {

    render() {
        return (
            <div>
                <h2 >Game board</h2>
                <StartButton></StartButton>
                <HitsDisplay></HitsDisplay>
            </div>
        );
    }
}

export default GameBoard;