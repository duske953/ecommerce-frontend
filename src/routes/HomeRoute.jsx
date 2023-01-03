import { ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Hero from "../page/homePage/Hero";
import { Features } from "../page/homePage/features";
import { ProductsBox } from "../components/products";
import { Details } from "../page/homePage/Details";
import { ButtonLink } from "../components/Button";
import Footer from "../components/Footer";
import { useLoaderData } from "react-router-dom";

export default function HomeRoute() {
  const response = useLoaderData();
  const headPhones = response.data.data.headphones;
  const laptops = response.data.data.laptops;

  return (
    <>
      <Navbar />
      <Title title="start shopping tech" />
      <Hero />
      <Features />
      <ScrollRestoration />
      <section className="featured-products">
        <ProductsBox title={"#Headphones"} data={headPhones} />
        <div className="featured-products__btn-box">
          <ButtonLink
            link="/products?id=172541&category=Headpones&page=1"
            title="see more"
            nameClass="featured-products__button"
          />
        </div>
      </section>
      <Details />
      <section className="featured-products">
        <ProductsBox title={"#Computers"} data={laptops} />
        <div className="featured-products__btn-box">
          <ButtonLink
            link="/products?id=13896617011&category=Computers&Tablets&page=1"
            title="see more"
            nameClass="featured-products__button"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
