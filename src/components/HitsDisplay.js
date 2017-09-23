import React from 'react';

const HitsDisplay = (props) => {
    return (
        <div>
            <span>Left to hit:
                <span
                    style={{
                    backgroundColor: "#e53314",
                    fontSize: "20px"
                }}>{props.hits}</span>
            </span>
        </div>
    );
};

export default HitsDisplay;