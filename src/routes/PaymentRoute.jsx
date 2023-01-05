import { Navigate, useLoaderData } from "react-router-dom";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import { useUser } from "../hooks/swrhook";
import { Button } from "../components/Button";
import Err404 from "../components/Err404";
import Footer from "../components/Footer";

const appearance = {
  theme: "night",
};

const CheckoutForm = () => {
  const data = useLoaderData();
  const stripe = useStripe();
  const elements = useElements();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `https://ecommerce-frontend-duske953.vercel.app/payment_success?id=${data.paymentIntent.metadata.productId}`,
      },
    });

    https: if (result.error) {
      console.log(result.error.message);
    } else {
    }
  }

  return (
    <form className="payment-element" onSubmit={handleSubmit}>
      <PaymentElement />
      <Button nameClass="form" style="idle" msg="submit" />
    </form>
  );
};

const stripePromise = loadStripe(
  "pk_test_51M0GgNBbIqUU47iSDEuvPtnxhMNzTdX7DuHpnve8FkM57UR2i91htSXTQCrYuctUJS9oNFMdRnmbcmTYqymvm68j00znxRoHBX"
);
export default function PaymentRoute() {
  const { user, userLoading, userError } = useUser();
  const data = useLoaderData();
  console.log(data.status);
  if (data.status === 404) {
    return (
      <>
        <Err404 />
      </>
    );
  }

  if (data.status === 401 || user?.data.message === "Logged out") {
    return <Navigate to="/login" replace />;
  }

  if (data.status > 401) {
    return (
      <>
        <Navbar />
        <p className="p-lg abs-center">{data.msg}</p>;
      </>
    );
  }
  const options = {
    clientSecret: `${data.paymentIntent.client_secret}`,
    appearance,
  };

  return (
    <>
      <Navbar />
      <a href=""></a>
      <Title title={`Checkout ${data.paymentIntent.metadata.productTitle}`} />
      <section className="section-payment">
        <div className="section-payment__container">
          <div className="section-payment__img-box">
            <img
              className="section-payment__img"
              src={data.paymentIntent.metadata.productImg}
              alt=""
            />
          </div>
          <div className="section-payment__payment">
            <div className="section-payment__info">
              <h2 className="section-payment__title">
                {data.paymentIntent.metadata.productTitle
                  .slice(0, 15)
                  .padEnd(18, "...")}
              </h2>
              <p className="section-payment__price">
                {`$${data.paymentIntent.metadata.productPrice}`}
              </p>
            </div>
            <Elements stripe={stripePromise} options={options}>
              <CheckoutForm />
            </Elements>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
