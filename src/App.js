import React, {Component} from 'react';
import './App.css';
import luhnCheck from './logics/luhnCheck';
class App extends Component {
  
  constructor(){
    super();
    this.state = {
      cardNumbers: '',
      numbers: [],
      valid: '',
      cardName: '',
      validity: false
     
    }
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler = (e) => {
    e.preventDefault();
    this.setState({
      cardNumbers: e.target.value,
      numbers: this.state.cardNumbers.split('')
    });
    
    
    console.log(this.state.cardNumbers, this.state.numbers, this.state.cardName)
  }

  submitHandler = (e) => {
    e.preventDefault();
    let cardNum = this.state.cardNumbers.replace(/\s+/g, '')
   luhnCheck(cardNum)
   if ( luhnCheck(cardNum)){
     this.setState({
       valid: "Card number is valid",
       validity: true
      })
     let num = this.state.cardNumbers;

      if(num.charAt(0) === '4'){
        this.setState({
          cardName: 'Visa'
        }) } else if(num.charAt(0) === '5'){
          this.setState({
            cardName: 'Mastercard'
          })
        } else if (num.charAt(0) === '3'){
          if(num.charAt(1) === '4' || num.charAt(1) === '7'){
            this.setState({
              cardName: 'American Express'
            })
          }} else {
            this.setState({
              cardName: ''
            })
          }} else {
        this.setState({
          valid: "Card number is not valid",
          validity: false
        });
        if (this.state.validity === true){
          this.setState({
            cardName: ''
          })
        }
      }  


      
     
    console.log(this.state.cardNumbers, this.state.numbers,  luhnCheck(this.state.cardNumbers), this.state.cardName)
  }

// luhnCheck = num => {
//     let arr = (num + '')
//       .split('')
//       .reverse()
//       .map(x => parseInt(x));
//     let lastDigit = arr.splice(0, 1)[0];
//     let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
//     sum += lastDigit;

//     return sum % 10 === 0;

//   };
  

  render(){
  return (
    <div className="App">
      <header className="App-header">
      <h3>Card Validator</h3>
      <div className="form-input">
        <input type="text" value={this.state.cardNumbers} onChange={this.changeHandler}/>
        <input type="submit" value="Check" onClick={this.submitHandler}/>

        <h3>{this.state.valid}</h3>
    <p>{this.state.cardName}</p>

  
      
        </div>
      </header>
    </div>
  );
}
}

export default App;
