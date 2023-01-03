import { useLoaderData } from "react-router-dom";
import { useSWRConfig } from "swr";
import Err404 from "../components/Err404";
import Title from "../components/Title";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function PaymentSuccess() {
  const data = useLoaderData();
  const { mutate } = useSWRConfig();
  if (data?.status === 200) {
    mutate(
      "https://oek-ecommerce-backend.vercel.app/api/v1/products/getProductsFromCart"
    );
    mutate("https://oek-ecommerce-backend.vercel.app/api/v1/users/isLoggedIn");
  }

  if (data?.status === 400) {
    return (
      <>
        <Title title="404 page not found" />
        <Err404 />;
      </>
    );
  }
  return (
    <>
      <Navbar />
      <Title title="payment success" />
      <div className="abs-center payment-success_box">
        <p className="c-mark">
          Your order has been processed. Please check your email box for more
          details.
        </p>
      </div>
      <Footer />
    </>
  );
}
