import React from 'react';
import PropTypes from 'prop-types';

const SingleCell = props => {
  const passCellCord = () => {
    props.clickedCell(props.row, props.col);
  };
  return (
    <td
      style={{
        height: '50px',
        width: '50px',
        border: 'solid 1px #444',
        margin: 'auto',
        fontWeight: '900',
        textAlign: 'center',
        fontSize: '30px'
      }}
      onClick={passCellCord}>
      <i
        style={{
          color: '#7500FF'
        }}
        className={props.innerCell}
      />
    </td>
  );
};

SingleCell.PropTypes = {
  clickedCell: PropTypes.func.isRequired,
  col: PropTypes.number.isRequired,
  innerCell: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired
};

export default SingleCell;
