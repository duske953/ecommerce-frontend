import axios from "axios";
import useSwr from "swr";
import useSWRImmutable from "swr/immutable";
let url = import.meta.env.VITE_BACKEND_URL

// let url = "http://localhost:3000/api/v1";

const fetcher = (url) =>
  axios.get(url, { withCredentials: true }).then((res) => res.data);

export function useUser() {
  const { data, error } = useSWRImmutable(`${url}/users/isLoggedIn`, fetcher, {
    errorRetryCount: 1,
    revalidateOnReconnect: true,
  });
  return {
    user: data,
    userLoading: !error && !data,
    userError: error,
  };
}

export function useHomeProducts() {
  const { data, error } = useSWRImmutable(`${url}/products`, fetcher);
  return {
    homeProductsData: data,
    homeProductsLoading: !error && !data,
    homeProductsError: error,
  };
}

export function useProduct({ asin, id }) {
  const { data, error } = useSWRImmutable(
    `${url}/products/${asin}/${id}`,
    fetcher
  );
  return {
    productData: data,
    productLoading: !error && !data,
    productError: error,
  };
}

export function useSearchProduct(query, page) {
  const { data, error } = useSWRImmutable(
    `${url}/products/search?q=${query}&page=${page}`,
    fetcher
  );
  return {
    searchedProduct: data,
    searchedLoading: !error && !data,
    searchedError: error,
  };
}

export function usegetProductsFromCart() {
  const { data, error } = useSwr(
    `${url}/products/getProductsFromCart`,
    fetcher,
    { revalidateOnFocus: false }
  );
  return {
    cartData: data,
    cartLoading: !error && !data,
    cartError: error,
  };
}

export function useFetchProducts({ id, page, category }) {
  const { data, error } = useSWRImmutable(
    `${url}/products/getProductsFromCategory?id=${id}&page=${page}&category=${category}`,
    fetcher
  );
  return {
    ProductsData: data,
    ProductsLoading: !error && !data,
    ProductsError: error,
  };
}
