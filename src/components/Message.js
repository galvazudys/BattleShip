import React from 'react';

const Message = (props) => {


    return (
        <div
            style={{
            textAlign: "center",
            margin: "15px auto"
        }}>
            <h3
                style={{
                fontFamily: " 'VT323', monospace",
                fontSize: "50px"
            }}>{props.message}</h3>
        </div>
    );
};

export default Message;