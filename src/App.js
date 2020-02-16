import React, {Component} from 'react';
import './App.css';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      cardNumbers: '',
      numbers: [],
      valid: ''
     
    }
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler = (e) => {
    e.preventDefault();
    this.setState({
      cardNumbers: e.target.value,
      numbers: this.state.cardNumbers.split('')
    });
    
    console.log(this.state.cardNumbers, this.state.numbers)
  }

  submitHandler = (e) => {
    e.preventDefault();
   this.luhnCheck(this.state.cardNumbers)
    
   if ( this.luhnCheck(this.state.cardNumbers)){
     this.setState({
       valid: "Card number is valid"
     })} else {
       this.setState({
         valid: "Card is not valid"
       })
     }
   
    console.log(this.state.cardNumbers, this.state.numbers,  this.luhnCheck(this.state.cardNumbers), this.state.valid)
  }

luhnCheck = num => {
    let arr = (num + '')
      .split('')
      .reverse()
      .map(x => parseInt(x));
    let lastDigit = arr.splice(0, 1)[0];
    let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
    sum += lastDigit;

    if (arr[0] === 3 && arr[1] === 4 || arr[1] === 7 ){
      console.log("American Express")
    }
    return sum % 10 === 0;

  };

  render(){
  return (
    <div className="App">
      <header className="App-header">
      <h3>Card Validator</h3>
      <div className="form-input">
        <input type="text" value={this.state.cardNumbers} onChange={this.changeHandler}/>
        <input type="submit" value="submit" onClick={this.submitHandler}/>

        <h3>{this.state.valid
    }</h3>

  
      
        </div>
      </header>
    </div>
  );
}
}

export default App;
