import { useLoaderData } from "react-router-dom";
import Title from "../components/Title";
import { useSearchProduct } from "../hooks/swrhook";
import Footer from "../components/Footer";
import Err404 from "../components/Err404";
import { ProductsBox } from "../components/products";
import Navbar from "../components/Navbar";
import usePagination from "../hooks/paginationHook";
import Pagination from "../components/Pagination";
import { DisplayErr } from "../utilities/utility";

export default function ProductSearchRoute() {
  // const [page, setPage] = useState(1);
  const { q, pageNumber } = useLoaderData();
  const { handleIncreaseClick, handleDecreaseClick, page } =
    usePagination(pageNumber);
  const { searchedProduct, searchedLoading, searchedError } = useSearchProduct(
    q,
    page
  );
  const err = searchedError?.response?.data?.message;

  if (searchedError?.response?.status === 404)
    return (
      <>
        <Err404 />
        <Title title="page not found" />
      </>
    );
  if (
    searchedError?.response?.status === 400 ||
    searchedError.response?.status > 404
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
      {searchedLoading ? (
        <ProductsBox state="loading" />
      ) : searchedProduct.data.searchedProduct.length === 0 ? (
        <>
          <Err404 />
          <Title title="404 page not found" />
        </>
      ) : (
        <>
          <section className="featured-products">
            <Title title={q} />
            <ProductsBox
              title={`Results for ${q}`}
              data={searchedProduct.data.searchedProduct}
            />
            <Pagination
              increase={handleIncreaseClick}
              decrease={handleDecreaseClick}
              page={page}
              searchedProduct={searchedProduct.data.searchedProduct.length}
              route={`/products/search?q=${q}&page`}
            />
          </section>
        </>
      )}
      <Footer />
    </>
  );
}
