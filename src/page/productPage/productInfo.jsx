import { useNavigate, Navigate, useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import { Rating } from "react-simple-star-rating";
import Skeleton from "react-loading-skeleton";
import { useSWRConfig } from "swr";
import { Button } from "../../components/Button";
import { useUser } from "../../hooks/swrhook";
import { changeImageWidth } from "../../utilities/utility";
import { sendRequestToBackend } from "../../utilities/utility";
import { renderToastify, updateToastify } from "../../utilities/toastify";
import { toast } from "react-toastify";
export default function ProductInfo(props) {
  const [btnAction, setBtnAction] = useState(false);
  const refId = useRef(null);
  const { mutate } = useSWRConfig();
  const { user, isLoading, isError } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  async function handleAddToCart() {
    if (!user?.message) {
      toast("You need to be logged in to perform this action", {
        type: "warning",
      });
      return navigate("/login", {
        state: location,
        relative: "path",
      });
    }
    try {
      refId.current = renderToastify("Adding to cart...");
      setBtnAction(true);
      await sendRequestToBackend(
        "patch",
        "products",
        { id: props._id },
        "addToCart"
      );
      setBtnAction(false);
      updateToastify(refId.current, "Product added to cart", "success");
    } catch (err) {
      updateToastify(refId.current, err.response.data.message, "error");
      setBtnAction(false);
    }

    await mutate("https://oek-ecommerce-backend.vercel.app/users/isLoggedIn"); // revalidating the request if a user is logged in
  }
  return (
    <>
      <section className="product-info">
        <div className="product-info__container">
          <div className="product-info__img-box">
            {props.state === "loading" ? (
              <Skeleton count={25} />
            ) : (
              <img
                className="product-info__img"
                src={changeImageWidth(props.image.slice(), "UL320", "UL660")}
                alt={props.title}
              />
            )}
          </div>

          <div className="product-info__details">
            <p className="product-info__category">
              {props.state === "loading" ? (
                <Skeleton />
              ) : (
                props.categories[0].name
              )}
            </p>
            <h2 className="secondary-heading product-info__heading">
              {props.state === "loading" ? <Skeleton /> : props.title}
            </h2>
            <div className="product-info__rating-box">
              <Rating
                readonly={true}
                initialValue={props.rating}
                allowFraction={true}
              />
              <p className="product-info__rating">
                {props.state === "loading" ? <Skeleton /> : props.rating}
              </p>
            </div>
            {/* <p className="product-info__price">{`${props.price.symbol}${props.price.value}`}</p> */}
            <div className="product-info__btns">
              <Button
                onClick={handleAddToCart}
                msg="Add to cart"
                nameClass="primary-button"
                style={btnAction ? "processing" : "idle"}
                isDisabled={btnAction}
              />
            </div>
          </div>
        </div>
        {/* <div className="product-info__details-box">
          {props.details[0].description ? (
            <div className="product-info__details-description-box">
              <p className="product-info__details-heading">Description</p>
              <p className="product-info__details-description">
                {props.details[0].description}
              </p>
            </div>
          ) : (
            ""
          )}
          <ul className="product-info__details-about">
            <p
              className="product-info__details-heading"
              style={{ alignSelf: "flex-start" }}
            >
              About
            </p>
            {about.info.map((el, i) => (
              <li className="product-info__details-list" key={el}>
                <p>{el?.trim() === "See more" ? "" : el}</p>
                <p>
                  {about?.infoDetail[i]?.trim() === "See more"
                    ? ""
                    : about.infoDetail[i]}
                </p>
              </li>
            ))}
          </ul>
        </div> */}
      </section>
    </>
  );
}
