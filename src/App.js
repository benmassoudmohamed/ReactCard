import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name:"foulen",
      CardNumber:"****************",
      date:"**/**"

     }
  }
  addName=(event)=>{
    this.setState({name:event.target.value})  
  }
  addNumber=(e)=>{
    this.setState({Carnumber:e.target.value})
  }
  addDate=(e)=>{
    this.setState({date:e.target.value})
  }
  render() { 
    return ( <div className="card">
      <img src="https://image.shutterstock.com/image-illustration/orange-credit-card-vector-highly-260nw-37669804.jpg"/>
      
     <input type='text' placeholder='name'maxlength="16" onChange={(event)=>this.addName(event)}/><br/>
     <input type='text' placeholder='Card number'maxlength="20" onChange={(e)=>this.addName(e)}/><br/>
     <input type='text' placeholder='date'maxlength="5" onChange={(e)=>this.addName(e)}/><br/>
     <div>
       
     <p>{(this.state.name.match(/^[a-zA-Z]+$/g)&&this.state.name.length<20)?this.state.name.toUpperCase():alert('invalid name')}</p> 
     <p>{(this.state.CardNumber.length!==16&&this.state.CardNumber.match(/^[a-zA-Z]/g))?alert('invalid card number'):this.state.CardNumber.padEnd(16,'*')}</p>
     <p>{((this.state.date.length>5)||(this.state.date.match(/^[a-zA-Z]/g)||parseInt(this.state.date.slice(0,2))>12))?alert('invalid date'):this.state.date.padEnd(5,'*')}</p>
     </div>
    </div>
    

     );
  }
}
 
export default App;












