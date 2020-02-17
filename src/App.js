import React, { Component } from "react";
import "./App.css";
import luhnCheck from "./Luhn/luhnCheck";

class App extends Component {

  constructor() {
    super();
    this.state = {
      cardNumbers: "",
      valid: "",
      cardName: "",
      validity: false
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler = (e) => {
    this.setState({
      cardNumbers: e.target.value
    });
  };

  submitHandler = (e) => {
    e.preventDefault();

    //remove spacing between characters
    let cardNum = this.state.cardNumbers.replace(/\s+/g, "");

    luhnCheck(cardNum);

    if (luhnCheck(cardNum)) {
      this.setState({
        valid: "Valid",
        validity: true
      });

      let num = this.state.cardNumbers;

      if (num.charAt(0) === "4") {
        this.setState({
          cardName: "Visa"
        });
      } else if (num.charAt(0) === "5") {
        this.setState({
          cardName: "Mastercard"
        });
      } else if (num.charAt(0) === "3") {
        if (num.charAt(1) === "4" || num.charAt(1) === "7") {
          this.setState({
            cardName: "American Express"
          });
        }
      } else {
        this.setState({
          cardName: ""
        });
      }
    } else {
      this.setState({
        valid: "Not valid",
        validity: false
      });

      //Makes card name disappear if invalid number is inserted after valid number
      if (this.state.validity === true) {  
        this.setState({
          cardName: ""
        });
      }
    }
  };

  render() {
    return (
      <div className="app">
     
          <h3>Card Validator</h3>
          <div className="form-input">
            <label>Insert credit card number: </label><br/>
            <input
              type="text"
              value={this.state.cardNumbers}
              onChange={this.changeHandler}
            />
            <input type="submit" value="Check" className="submit-btn" onClick={this.submitHandler} />

    <p className={this.state.validity ? 'confirmation green' : 'confirmation red'}>{this.state.valid.toUpperCase()}</p>
            <p>{this.state.cardName}</p>
          </div>
      
      </div>
    );
  }
}

export default App;
