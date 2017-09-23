import React from 'react';

const Score = (props) => {
    return (
        <div
            style={{
            textAlign: "center",
            fontSize: "80px",
            margin: "25px 2em",
            padding: "25px",
            backgroundColor: "#B26D0A",
            border: "solid 2px #444"
        }}>
            <span >{props.score}</span>
        </div>
    );
};

export default Score;