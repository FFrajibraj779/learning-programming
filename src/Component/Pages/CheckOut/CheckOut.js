import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutDetails from "../CheckoutDetails/CheckoutDetails";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const CheckOut = () => {
  const data = useLoaderData();
  console.log(stripePromise);

  return (
    <div style={{ height: "100vh" }} className="  d-flex justify-content-center  mt-5  ">
      {data.map((singledata) => (
        <Elements stripe={stripePromise}>
          <CheckoutDetails key={singledata._id} singledata={singledata} />
        </Elements>
      ))}
    </div>
  );
};

export default CheckOut;
