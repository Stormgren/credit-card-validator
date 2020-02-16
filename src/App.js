import React, {Component} from 'react';
import './App.css';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      cardNumbers: '',
      numbers: [],
      valid: '',
      cardName: 'test'
     
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
   this.luhnCheck(this.state.cardNumbers)
   if ( this.luhnCheck(this.state.cardNumbers)){
     this.setState({
       valid: "Card number is valid"
      })} else {
        this.setState({
          valid: "Card is not valid"
        })
      }
      
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
          }
    console.log(this.state.cardNumbers, this.state.numbers,  this.luhnCheck(this.state.cardNumbers), this.state.cardName)
  }

luhnCheck = num => {
    let arr = (num + '')
      .split('')
      .reverse()
      .map(x => parseInt(x));
    let lastDigit = arr.splice(0, 1)[0];
    let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
    sum += lastDigit;

    return sum % 10 === 0;

  };
  // cardType = (val) => {
  //   let num = val.split('')

    // if(num[0] === 4){
    //   this.setState({
    //     cardName: 'Visa'
    //   }) } else if(num[0] === 5){
    //     this.setState({
    //       cardName: 'Mastercard'
    //     })
    //   } else if (num[0] === 3){
    //     if(num[1] === 4 || num[1] === 7){
    //       this.setState({
    //         cardName: 'American Express'
    //       })
    //     }} else {
    //       this.setState({
    //         cardName: ''
    //       })
    //     }
      
    
  // }

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
    <p>{this.state.cardName}</p>

  
      
        </div>
      </header>
    </div>
  );
}
}

export default App;
