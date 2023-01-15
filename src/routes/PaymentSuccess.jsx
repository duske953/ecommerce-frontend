import { useLoaderData, Navigate } from "react-router-dom";
import { useSWRConfig } from "swr";
import { useEffect } from "react";
import Err404 from "../components/Err404";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import { useUser } from "../hooks/swrhook";
import NetworkError from "../components/NetworkError";
import { Checkmark } from "react-checkmark";

export default function PaymentSuccess() {
  const data = useLoaderData();

  const { mutate } = useSWRConfig();

  const { user, userLoading } = useUser();
  useEffect(() => {
    if (data?.status === 200) {
      mutate(
        "https://oek-ecommerce-backend.vercel.app/api/v1/users/isLoggedIn"
      );
      mutate(
        "https://oek-ecommerce-backend.vercel.app/api/v1/products/getProductsFromCart"
      );
    }
  }, [data]);

  if (data?.err?.message === "Network Error") return <NetworkError />;
  if (data?.status !== 200) {
    return (
      <>
        <Err404 />;
        <Title title="404 page not found" />
      </>
    );
  }

  if (!userLoading) {
    if (data?.status === 401 || !user || user?.data.message === "Logged out")
      return <Navigate to="/" replace />;
  }

  return (
    <>
      <Navbar />
      <Title title="payment success" />
      <div className="abs-center payment-success_box">
        <Checkmark size="xxLarge" color="#223344" />
        <p className="c-mark">
          Your order has been processed. Please check your email box for more
          details.
        </p>
      </div>
    </>
  );
}
