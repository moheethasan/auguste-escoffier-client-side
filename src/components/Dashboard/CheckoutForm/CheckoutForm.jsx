import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ price, selectedClass }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // if (price > 0) {
    axiosSecure.post("/create-payment-intent", { price }).then((data) => {
      setClientSecret(data.data.clientSecret);
    });
    // }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError);
    }

    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      const updatedStatus = {
        payment_status: "enrolled",
      };
      axiosSecure
        .patch(`/enrolls/${selectedClass._id}`, updatedStatus)
        .then((data) => {
          if (data.data.modifiedCount > 0) {
            const payment = {
              class_name: selectedClass.class_name,
              email: user?.email,
              transactionId: paymentIntent.id,
              date: new Date(),
            };
            axiosSecure.post("/payments", payment).then((data) => {
              if (data.data.insertedId) {
                Swal.fire("Done!", `You have successfully enrolled`, "success");
                navigate("/dashboard/enrolledClass");
              }
            });
          }
        });
    }
  };

  return (
    <>
      {" "}
      <form onSubmit={handleSubmit} className="text-center">
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
        {cardError && <p className="text-red-600 my-3">{cardError}</p>}
        <button
          type="submit"
          className="btn btn-accent text-white  bg-lime-500 hover:bg-lime-600 border-0"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
    </>
  );
};

export default CheckoutForm;
