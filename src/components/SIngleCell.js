import React from 'react';

const SingleCell = (props) => {
    const passCellCord =()=>{
        props.clickedCell(props.row,props.col);
    }
    return (
        <td onClick={passCellCord}>{props.innerCell}</td>
            
        
    );
};

export default SingleCell;