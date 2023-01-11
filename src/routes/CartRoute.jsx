import { Navigate } from "react-router-dom";
import { useUser, usegetProductsFromCart } from "../hooks/swrhook";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import { DisplayErr } from "../utilities/utility";
import CardCart from "../components/CardCart";
import { v4 as uuidv4 } from "uuid";
import emptyCart from "../assets/undraw_empty_cart_co35.svg";
import Footer from "../components/Footer";
import NetworkError from "../components/NetworkError";

export default function CartRoute() {
  const { user, userLoading } = useUser();
  const { cartData, cartLoading, cartError } = usegetProductsFromCart();

  if (cartError?.message === "Network Error") return <NetworkError />;
  if (userLoading === false) {
    if (
      user?.data.message === "Logged out" ||
      cartError?.response?.status === 401 ||
      !user
    )
      return <Navigate to="/login" replace />;
  }

  const cartProducts = cartData?.data?.product?.products;

  if (cartError?.response?.status === 400 || cartError?.response.status > 404) {
    return (
      <>
        <Navbar />
        <DisplayErr>
          <p className="p-lg abs-center">
            {cartError?.response?.data.message || "Something went wrong"}
          </p>
        </DisplayErr>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Title title="Shopping cart" />
      {cartLoading ? (
        Array(5)
          .fill(0, 0)
          .map((el, i) => (
            <div key={uuidv4()}>
              <h1>&nbsp;</h1>
              <CardCart state="loading" />
            </div>
          ))
      ) : cartProducts.length === 0 ? (
        <>
          <DisplayErr>
            <img src={emptyCart} alt="empty cart" />
          </DisplayErr>
        </>
      ) : (
        <section className="section-cart">
          <h2 className="secondary-heading section-cart__heading">
            Your shopping cart
          </h2>
          <div className="section-cart__container">
            {cartProducts.map((products, i) => (
              <CardCart {...products} key={products._id} />
            ))}
          </div>
        </section>
      )}
      <Footer />
    </>
  );
}
