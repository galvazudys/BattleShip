import React from 'react';
import PropTypes from 'prop-types';

const HitsDisplay = props => {
  return (
    <div>
      <span>
        Left to hit:
        <span
          style={{
            backgroundColor: '#e53314',
            fontSize: '20px'
          }}>
          {props.hits}
        </span>
      </span>
    </div>
  );
};

HitsDisplay.PropTypes = {
  hits: PropTypes.number.isRequired
};
export default HitsDisplay;
