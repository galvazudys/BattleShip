import React, {Component} from 'react';
import HitsDisplay from '../components/HitsDisplay';
import StartButton from '../components/StartButton';
import _ from 'lodash';
import SingleCell from '../components/SIngleCell';

class GameBoard extends Component {
    constructor(){
        super();
        this.state={
            
            gameState:{}
        }

        
    }
    clickedCell(row,col){
        const tempArray = this.state.gameState
        if(this.props.shipData[row][col] !==null){

            tempArray[row][col] = 'X';
        }else{
            tempArray[row][col] = 'O';
            
        }
        this.setState({gameState:tempArray});
        console.log(this.state.gameState[row][col]);
    }

componentDidMount() {
    this.setState({gameState:this.props.gameState});
}
    render() {
        console.log(this.props)
        const row = _.map(this.state.gameState,(item,index)=>{
            const cell = _.map(item,(item,key)=>{
                        if(item === null){
                            item = ''
                        }
                       return( <SingleCell row={index} col={key} innerCell={item}  clickedCell={this.clickedCell.bind(this)} key={key}></SingleCell>)                
            })
            return(            
                    <tr  key={index}>
                        {cell}
                    </tr>);
            
                });
        return (
            <div>
                <h2 >Game board</h2>
                <table className="ui celled table">
                    <tbody>
                        {row}
                    </tbody>
                </table>
                <StartButton></StartButton>
                <HitsDisplay></HitsDisplay>
            </div>
        );
    }
}

export default GameBoard;