import { useLoaderData } from "react-router-dom";
import Title from "../components/Title";
import { useFetchProducts } from "../hooks/swrhook";
import Navbar from "../components/Navbar";
import { ProductsBox } from "../components/products";
import { DisplayErr } from "../utilities/utility";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
import usePagination from "../hooks/paginationHook";
import Err404 from "../components/Err404";
export default function ProductsRoute() {
  const searchParamsData = useLoaderData();
  const { ProductsData, ProductsLoading, ProductsError } =
    useFetchProducts(searchParamsData);
  const { handleIncreaseClick, handleDecreaseClick, page } = usePagination(
    searchParamsData.page
  );
  const err = ProductsError?.response?.data?.message;
  if (ProductsError?.response.status === 404) return <Err404 />;

  if (
    ProductsError?.response.status === 400 ||
    ProductsError.response.status > 404
  )
    return (
      <>
        <Navbar />
        <DisplayErr>
          <p className="message">{err}</p>
          <Title title={err} />
        </DisplayErr>
      </>
    );

  return (
    <>
      <Navbar />
      {ProductsLoading ? (
        <ProductsBox state="loading" />
      ) : ProductsData.data.foundProducts.length === 0 ? (
        <DisplayErr>
          <p className="message">No products found on this page</p>
          <Title title="404 page not found" />
        </DisplayErr>
      ) : (
        <section className="featured-products">
          <Title title={searchParamsData.category} />
          <ProductsBox
            data={ProductsData.data.foundProducts}
            title={searchParamsData.category}
          />
          <Pagination
            increase={handleIncreaseClick}
            decrease={handleDecreaseClick}
            page={page}
            route={`/products/?id=${searchParamsData.id}&category=${searchParamsData.category}&page`}
          />
        </section>
      )}
      <Footer />
    </>
  );
}
