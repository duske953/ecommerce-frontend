import { ButtonLink } from "./Button";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export default function ProductCard({
  img,
  title,
  price,
  nameClass,
  path,
  rating,
  state,
}) {
  return (
    <figure className="product-card">
      <Link
        className="product-card__link"
        to={state === "loading" ? "#" : path}
      >
        {state === "loading" ? (
          <Skeleton count={11} />
        ) : (
          <img className="product-card__img" src={img} alt={title} />
        )}
        <figcaption className="product-card__details">
          <p className="product-card__detail">
            {state === "loading" ? <Skeleton /> : title}
          </p>
          <div className="product-card__rating">
            <Rating
              readonly={true}
              initialValue={state === "loading" ? 5 : rating}
              allowFraction={true}
              size={20}
            />
            <p>{state === "loading" ? <Skeleton /> : `(${rating})`}</p>
          </div>
          <p className="product-card__price">
            {state === "loading" ? <Skeleton /> : price}
          </p>
        </figcaption>
      </Link>
    </figure>
  );
}
