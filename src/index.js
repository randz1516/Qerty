import React from 'react';
import ReactDOM from 'react-dom';
import Prac from './Components/Practice';

class Mains extends React.Component{
    render(){
       return(
           <div >
               <Prac/>
           </div>
       )
    } 
}
ReactDOM.render(
    <Mains/>, document.querySelector('#root')
);

