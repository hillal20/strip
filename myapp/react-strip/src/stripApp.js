import React, { Component } from "react";
import { StripeProvider } from "react-stripe-elements";

import MyStoreCheckout from "./myStoreCheckout";
class StripeApp extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_dtZeEKgd6FSjpH2sFi8RAYFa">
        <MyStoreCheckout />
      </StripeProvider>
    );
  }
}

export default StripeApp;
