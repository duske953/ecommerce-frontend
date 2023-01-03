import ProductCard from "./ProductCard";
import { v4 as uuidv4 } from "uuid";
import Skeleton from "react-loading-skeleton";

export function ProductsBox({ data, title, state }) {
  const items = state === "loading" ? Array(8).fill(0, 0) : data;
  return (
    <>
      <h2 className="secondary-heading featured-products__heading g-container">
        {state === "loading" ? <Skeleton /> : title}
      </h2>
      <div className="featured-products__section-box">
        <div className="featured-products__container">
          <div className="featured-products__products">
            {items.map((el) =>
              state === "loading" ? (
                <ProductCard state={state} key={uuidv4()} />
              ) : (
                <ProductCard
                  key={el._id}
                  title={el.title.slice(0, 40).padEnd(43, "...")}
                  img={el.image.replace("UL320", "UL550")}
                  nameClass="featured-products__card-img"
                  price={`$${el.price.value ? el.price.value : el.price.name}`}
                  path={`/product/${el.asin}/${el._id}`}
                  rating={el.rating}
                  state={state}
                />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
