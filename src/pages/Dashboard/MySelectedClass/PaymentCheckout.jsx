import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "../../../components/Dashboard/CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const PaymentCheckout = () => {
  const selectedClass = useLoaderData();

  const amount = selectedClass.price;
  const price = parseFloat(amount.toFixed(2));

  return (
    <div className="text-center my-40">
      <h1 className="text-2xl lg:text-4xl font-semibold uppercase mb-10 text-center">
        Complete Your Enrollment
      </h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm
          price={price}
          selectedClass={selectedClass}
        ></CheckoutForm>
      </Elements>
    </div>
  );
};

export default PaymentCheckout;
