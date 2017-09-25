import React from 'react';
import PropTypes from 'prop-types';

const ScoreBoard = props => {
  return (
    <div
      style={{
        marginLeft: '2em',
        float: 'left'
      }}
      className="ui list">
      <div style={{ fontSize: '2em' }} className="item">
        00:00 - <span>{props.score}</span>
      </div>
      <div style={{ fontSize: '2em' }} className="item">
        00:00 - <span>{props.score}</span>
      </div>
      <div style={{ fontSize: '2em' }} className="item">
        00:00 - <span>{props.score}</span>
      </div>
    </div>
  );
};

ScoreBoard.propTypes = {
  score: PropTypes.number.isRequired
};

export default ScoreBoard;
