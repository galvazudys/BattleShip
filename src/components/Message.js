import React from 'react';
import PropTypes from 'prop-types';

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
Message.PropTypes = {
    message:PropTypes.string.isRequired
}

export default Message;