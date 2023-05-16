import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  FormContainer,
  PaymentFormContainer,
  PaymentButton,
  Spinner,
} from "./payment-form.style";

import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const user = useSelector(selectCurrentUser);
  const [isProcessing, setIsProcessing] = useState(false);

  const stripePaymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessing(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: user ? user.displayName : "Guest",
          address: {
            line1: "510 Townsend St",
            postal_code: "98140",
            city: "San Francisco",
            state: "CA",
            country: "US",
          },
        },
      },
    });

    setIsProcessing(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment successful");
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={stripePaymentHandler}>
        <h2>Credit card payment:</h2>
        <CardElement />
        <PaymentButton
          isLoading={isProcessing}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          {isProcessing ? <Spinner /> : "Pay now"}
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
