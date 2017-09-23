import React from 'react';
import HitsDisplay from '../components/HitsDisplay';

const StartButton = (props) => {
    const startOrResetGame = () => {
        props.startGame()
    }
    return (
        <div
            style={{
            marginTop: "10px"
        }}
            className="ui two bottom attached buttons">
            <div
                style={{
                fontFamily: " 'VT323', monospace",
                fontSize: "20px",
                letterSpacing: "2px"
            }}
                className="ui  green button"
                onClick={startOrResetGame}>Start Game</div>
            <div
                style={{
                fontFamily: " 'VT323', monospace",
                fontSize: "20px",
                letterSpacing: "2px",
                color: "#000"
            }}
                className="ui disabled  green button">
                <HitsDisplay hits={props.hits}></HitsDisplay>
            </div>
        </div>
    );
};

export default StartButton;