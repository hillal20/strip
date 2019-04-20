import React, { Component } from "react";
import { StripeProvider } from "react-stripe-elements";
import StripeApp from "./stripApp.js";
import MyStoreCheckout from "./myStoreCheckout";
class App extends Component {
  render() {
    return (
      // <StripeProvider apiKey="pk_test_dtZeEKgd6FSjpH2sFi8RAYFa">
      //   <MyStoreCheckout />
      // </StripeProvider>
      <StripeApp />
    );
  }
}

export default App;
