import React from 'react';

const SingleCell = (props) => {
    const passCellCord =()=>{
        props.clickedCell(props.row,props.col);
    }
    return (
        <td 
        style={{
            height:"50px",
            width:"50px",
            border:"solid 1px #444",
            margin:"auto",
            fontWeight:"900",
            textAlign:"center",
            fontSize:"30px"
            }} 
        onClick={passCellCord}><i style={{color:"#B26D0A"}} className={props.innerCell}></i></td>
            
        
    );
};

export default SingleCell;