import React from 'react';
import PropTypes from 'prop-types';

const ScoreBoard = props => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(122,111,23,0.7)',
        marginLeft: '2em',
        float: 'left'
      }}
      className="ui list">
      <div style={{ fontSize: '2em' }} className="item">
        {props.minutes}:{props.timer} - <span>{props.score}</span>
      </div>
      <div style={{ fontSize: '2em' }} className="item">
        {props.minutes}:{props.timer} - <span>{props.score}</span>
      </div>
      <div style={{ fontSize: '2em' }} className="item">
        {props.minutes}:{props.timer} - <span>{props.score}</span>
      </div>
    </div>
  );
};

ScoreBoard.propTypes = {
  score: PropTypes.number.isRequired,
  timer:PropTypes.number.isRequired,
  minutes:PropTypes.number.isRequired
  
};

export default ScoreBoard;
