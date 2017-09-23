import React, {Component} from 'react';
import StartButton from '../components/StartButton';
import _ from 'lodash';
import SingleCell from '../components/SIngleCell';

class GameBoard extends Component {
    constructor(){
        super();
        this.state={
            hitsLEft:17,
            gameState:{}
        }

        
    }
    clickedCell(row,col){
        const tempArray = this.state.gameState
        if(this.props.shipData[row][col] !==null){
            let hits = this.state.hitsLEft;
            hits--;
            this.setState({hitsLEft:hits})
            tempArray[row][col] = 'ship icon';
        }else{
            tempArray[row][col] = 'theme icon';
            
        }
        this.setState({gameState:tempArray});
    }

componentDidMount() {
    this.setState({gameState:this.props.gameState});
}
    render() {
        console.log(this.state.hitsLEft)
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
                <table style={{border:"solid 2px #555",backgroundColor:"#27f966",margin:"auto",boxShadow:"4px 6px 5px 0px rgba(50, 50, 50, 0.87)"}}>
                    <tbody  >
                        {row}
                    </tbody>
                </table>
                <StartButton hits={this.state.hitsLEft}></StartButton>
            </div>
        );
    }
}

export default GameBoard;