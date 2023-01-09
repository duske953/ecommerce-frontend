import "react-loading-skeleton/dist/skeleton.css";
import Navbar from "../components/Navbar";
import ProductInfo from "../page/productPage/productInfo";
import Title from "../components/Title";
import { ButtonLink } from "../components/Button";
import { ScrollRestoration, useLoaderData } from "react-router-dom";
import { ProductsBox } from "../components/products";
import Err404 from "../components/Err404";
import { useProduct } from "../hooks/swrhook";
import NetworkError from "../components/NetworkError";
import Footer from "../components/Footer";

export default function ProductInfoRoute() {
  const params = useLoaderData();
  const { productData, productError, productLoading } = useProduct(params);
  const productInfo = productData?.data.product;
  const similarProducts = productData?.data.similarProduct;

  if (productError?.message === "Network Error") return <NetworkError />;

  if (productError?.response?.status === 404) {
    return <Err404 />;
  }

  if (
    productError?.response?.status === 400 ||
    productError?.response?.status > 404
  ) {
    return (
      <>
        <Navbar />
        <p className="p-lg abs-center">
          {productError?.response?.data.message || "Something went wrong"}
        </p>
        ;
      </>
    );
  }

  return (
    <>
      <Title title={productInfo?.title} />
      <Navbar />
      <ScrollRestoration />
      {productLoading ? (
        <>
          <ProductInfo state="loading" />
          <ProductsBox state="loading" />
        </>
      ) : (
        <div>
          <ProductInfo {...productInfo} />
          <section className="featured-products">
            <ProductsBox title="Similar products" data={similarProducts} />
          </section>
        </div>
      )}
      <Footer />
    </>
  );
}
