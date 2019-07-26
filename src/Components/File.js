import React from 'react';
import './New.css';

function Clicker(){
    console.log('Its click');
}
class QuestionComponents extends React.Component{
    render(){
        return(
            <div>
                <div className = 'all' style={{width: '500px'}}>
                        <div className='QA'><h1>Your Score is {}/10</h1></div>
                        Question: {this.props.Question}
                    <hr/>
                    <div className = 'WOW'  >
                        <button style={{width:'120px', height: '25px'}} onClick={Clicker}className='buttons-click'>A. {this.props.A}</button>
                        <button style={{width:'120px', height: '25px'}} onClick={Clicker}className='buttons-click'>B. {this.props.B}</button>
                        <button style={{width:'120px', height: '25px'}} onClick={Clicker}className='buttons-click'>C. {this.props.C}</button>
                        <button style={{width:'120px', height: '25px'}} onClick={Clicker}className='buttons-click'>D. {this.props.D}</button> 
                    </div>
                    <br/>
                </div>
            </div>
        )
    }
}

export default QuestionComponents;