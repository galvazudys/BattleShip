import React from 'react';
import HitsDisplay from '../components/HitsDisplay';
import PropTypes from 'prop-types';

const StartButton = props => {
  const startOrResetGame = () => {
    props.startGame();
  };
  return (
    <div
      style={{
        margin: '20px 0',
        textAlign: 'center'
      }}>
      <div
        style={{
          boxShadow: 'inset 0 0 15px #333',
          fontFamily: " 'VT323', monospace",
          fontSize: '20px',
          letterSpacing: '2px'
        }}
        className="ui  orange button"
        onClick={startOrResetGame}>
        Start Game
      </div>
      <div
        style={{
          boxShadow: 'inset 0 0 15px #333',
          fontFamily: " 'VT323', monospace",
          fontSize: '20px',
          letterSpacing: '2px',
          color: '#000'
        }}
        className="ui   orange button">
        <HitsDisplay hits={props.hits} />
      </div>
    </div>
  );
};

StartButton.PropTypes = {
  hits: PropTypes.number.isRequired,
  startGame: PropTypes.func.isRequired
};

export default StartButton;
