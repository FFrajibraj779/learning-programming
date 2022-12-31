import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";


//pk_test_51M5vrACD94rrdGa3tyD1d2jSyLuuQSdLwtzvi17T3VaWbKLjsx41yRoA2ggrCPxuwi803Cj86KatR6qZvBXeke1V00bpQiG17l

//sk_test_51M5vrACD94rrdGa3Y9TF8e9ZVVLsKDDiO5B1rEyPSwWn6MS6MMWcgPNcWo2atVfPNfXTceh9aV9oNKcVK0LU6tNY00hKjFkWl1



const CheckoutDetails = ({ singledata }) => {
  console.log(singledata);


  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
  };

  return (
    <div className="">
      <h4 className="">
        peyment for <span className="text-primary">{singledata?.title}</span>{" "}
      </h4>
      <h5>Total Amount ${singledata.price.slice(0, 2)}</h5>

      <form onSubmit={handleSubmit} className='border'>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="btn btn-outline-secondary mt-4" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutDetails;
