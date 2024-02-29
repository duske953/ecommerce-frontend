import { Navigate, useLoaderData, Form, useNavigate } from 'react-router-dom';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Navbar from '../components/Navbar';
import { useRef, useState } from 'react';
import Title from '../components/Title';
import { useUser } from '../hooks/swrhook';
import { Button } from '../components/Button';
import Err404 from '../components/Err404';
import { renderToastify, updateToastify } from '../utilities/toastify';
// import Footer from "../components/Footer";
import { changeImageWidth, sendRequestToBackend } from '../utilities/utility';
import NetworkError from '../components/NetworkError';
import { toast } from 'react-toastify';

const appearance = {
  theme: 'night',
};

const CheckoutForm = () => {
  const data = useLoaderData();
  const idRef = useRef();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [paymentLoading, setPaymentLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setPaymentLoading(true);
    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `https://tech-freak.vercel.app/payment_success?id=${data.paymentIntent.metadata.productId}`,
      },
      redirect: 'if_required',
    });
    if (result.error) {
      setPaymentLoading(false);
      if (result.error.type !== 'validation_error') {
        idRef.current = toast(result.error.message, {
          type: 'error',
          autoClose: 5000,
          toastId: 'paymentLoading',
          hideProgressBar: true,
        });
      }
    } else {
      toast.dismiss(idRef.current);
      const id = renderToastify('Processing order...');
      await sendRequestToBackend(
        'post',
        'users',
        { id: data.paymentIntent.metadata.productId },
        'productPaid'
      );
      navigate(`/payment_success?id=${data.paymentIntent.metadata.productId}`);
    }
  }

  return (
    <Form className="payment-element" onSubmit={handleSubmit}>
      <PaymentElement />
      {stripe && (
        <Button
          isDisabled={!stripe || paymentLoading}
          nameClass="form"
          style={paymentLoading || !stripe ? 'processing' : 'idle'}
          msg="submit"
          type="submit"
        />
      )}
    </Form>
  );
};

const stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE_KEY}`);
export default function PaymentRoute() {
  const { user, userLoading, userError } = useUser();
  const data = useLoaderData();
  if (data?.err?.message === 'Network Error') return <NetworkError />;
  if (data?.status === 404) {
    return (
      <>
        <Err404 />
      </>
    );
  }
  if (data.status === 401) return <Navigate to="/login" replace />;
  if (userLoading === false) {
    if (user?.data.message === 'Logged out' || !user) {
      return <Navigate to="/login" replace />;
    }
  }

  if (data?.status > 404 || data?.status === 400) {
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
      <div className="disclaimer-box">
        <p className="disclaimer-box__heading">
          Do not use your real credentials!!!
        </p>
        <div className="disclaimer-box__details">
          <p>
            Card Number : <span>4242 4242 4242 4242</span>
          </p>
          <p>
            MM / YY : <span>Use any of your choice i.e (12/25)</span>
          </p>
          <p>
            CVC: <span>Use any of your choice i.e (424)</span>
          </p>
        </div>
      </div>
      <Title title={`Checkout ${data.paymentIntent.metadata.productTitle}`} />
      <section className="section-payment">
        <div className="section-payment__container">
          <div className="section-payment__img-box">
            <img
              className="section-payment__img"
              src={changeImageWidth(
                data.paymentIntent.metadata.productImg,
                'UL320',
                'UL660'
              )}
              alt={data.paymentIntent.metadata.productTitle}
            />
          </div>
          <div className="section-payment__payment">
            <div className="section-payment__info">
              <h2 className="section-payment__title">
                {data.paymentIntent.metadata.productTitle
                  .slice(0, 15)
                  .padEnd(18, '...')}
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
    </>
  );
}
