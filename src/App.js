import React, {Component} from 'react';
import './App.css';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      cardNumbers: '',
      numbers: []
    }
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler = (e) => {
    this.setState({
      cardNumbers: e.target.value
    });
    console.log(this.state.cardNumbers, this.state.numbers)
  }

  submitHandler = (e) => {
    e.preventDefault();
    let arr = this.state.cardNumbers
    this.setState({
      numbers: arr.split('')
    })
    console.log(this.state.cardNumbers, this.state.numbers)
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
      <h3>Card Validator</h3>
      <div className="form-input">
        <input type="text" value={this.state.cardNumbers} onChange={this.changeHandler}/>
        <input type="submit" value="submit" onClick={this.submitHandler}/>

        <h3>{this.state.cardNumbers}</h3>

  
      
        </div>
      </header>
    </div>
  );
}
}

export default App;
