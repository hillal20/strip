import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import axios from "axios";
class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false
    };
  }

  submit = ev => {
    ev.preventDefault();
    let token = this.props.stripe
      .createToken({
        name: "trip ",
        email: "hilal@gmail.com"
      })
      .then(token => {
        console.log(token);
        const object = {
          token: token.token.id,
          email: token.token.email
        };
        let response = axios.post("http://localhost:4002/api", object);
        response
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      });
  };

  render() {
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />

        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
