import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

// Replace with your Stripe public key
const stripePromise = loadStripe('pk_test_51IEvEYFAdkvogIZjExFBL7s3fNWidRxm2i8JDTzllU1ESSN74CzUXNx9s89DXQbfCgYg0obwnJiwRSUjNiGBqywX00uRP0Y3Du');

const PaymentForm = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default PaymentForm;
