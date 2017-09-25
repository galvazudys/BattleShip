import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const ScoreBoard = props => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(122,111,23,0.7)',
        marginLeft: '2em',
        float: 'left'
      }}
      className="ui list">
      <div style={{ fontSize: '3em' }} className="item">
        {props.minutes}:{props.timer} - <span>{props.score}</span>
      </div>
      {_.map(props.oldGame, (thing, index) => {
        return (
          <div key={index} style={{ fontSize: '3em' }} className="item">
            {thing.minutes}:{thing.seconds} - <span>{thing.score}</span>
          </div>
        );
      })}
    </div>
  );
};

ScoreBoard.propTypes = {
  score: PropTypes.number.isRequired,
  timer: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  oldGame: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default ScoreBoard;
