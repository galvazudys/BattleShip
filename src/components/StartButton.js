import React from 'react';
import HitsDisplay from '../components/HitsDisplay';


const StartButton = (props) => {
    
    return (
        <div style={{marginTop:"10px"}} className="ui two bottom attached buttons">
            <div className="ui  green button">Start Game</div>
            <div className="ui  green button">
                <HitsDisplay hits={props.hits} ></HitsDisplay>
            </div>
        </div>
    );
};

export default StartButton;