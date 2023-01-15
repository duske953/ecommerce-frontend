import { MdOutlineCancel } from "react-icons/md";
import { useSWRConfig } from "swr";
import { useUser } from "../hooks/swrhook";
import { MdCheckCircleOutline } from "react-icons/md";
import { renderToastify, updateToastify } from "../utilities/toastify";
import { sendRequestToBackend } from "../utilities/utility";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useState } from "react";

export default function CardCart(props) {
  const { user, userLoading, userError } = useUser();
  const { mutate } = useSWRConfig();
  const [deleteItem, setDeleteItem] = useState(false);
  const navigate = useNavigate();
  async function handleDelete(id) {
    const idToast = renderToastify("Deleting item...");
    setDeleteItem(true);
    try {
      const response = await sendRequestToBackend(
        "patch",
        "products",
        { id },
        "deleteProductFromCart"
      );
      const cartResponse = await mutate(
        "https://oek-ecommerce-backend.vercel.app/api/v1/products/getProductsFromCart"
      );
      if (cartResponse.message === "products from cart loaded")
        setDeleteItem(false);
      mutate(
        "https://oek-ecommerce-backend.vercel.app/api/v1/users/isLoggedIn"
      );
      updateToastify(idToast, "Item removed from cart", "success");
    } catch (err) {
      setDeleteItem(false);
      updateToastify(
        idToast,
        "something went wrong while trying to remove item",
        "error"
      );
    }
  }

  function handleProcessStripe(e, link) {
    e.preventDefault();
    user.data.user.active === false
      ? toast("Your account must me active to perform this action", {
          type: "error",
        })
      : (window.location.href = link);
  }
  return (
    <div className="section-cart__card">
      <div className="section-cart__details">
        {props.state === "loading" ? (
          <Skeleton />
        ) : (
          <div className="section-cart__img-box">
            <img
              className="section-cart__img"
              src={props.products.image}
              alt={props.products.title}
            />
          </div>
        )}
        <div className="section-cart__description">
          <p className="section-cart__title">
            {props.state === "loading" ? (
              <Skeleton />
            ) : (
              props.products.title.slice(0, 14)
            )}
            ...
          </p>
          <p className="section-cart__id">
            Ref:{" "}
            {props.state === "loading" ? (
              <Skeleton />
            ) : (
              props.products.categories[0].id
            )}
          </p>
        </div>
      </div>
      <p className="section-cart__category">
        {props.state === "loading" ? (
          <Skeleton />
        ) : (
          props.products.categories[0].name
        )}
      </p>
      <div className="section-cart__price">
        {props.state === "loading" ? (
          <Skeleton />
        ) : props.products.price.symbol && props.products.price.value ? (
          props.products.price.symbol + "" + props.products.price.value
        ) : (
          props.products.price.name
        )}
      </div>
      <div className="section-cart__action">
        <button
          style={{ fontSize: "inherit", background: "none", border: "none" }}
          onClick={() => handleDelete(props._id)}
          disabled={deleteItem}
        >
          <MdOutlineCancel className="section-cart__cancel" />
        </button>
        <Link
          to={`/${props._id}/process-checkout`}
          onClick={(e) =>
            handleProcessStripe(e, `/${props._id}/process-checkout`)
          }
        >
          <MdCheckCircleOutline className="section-cart__good" />
        </Link>
      </div>
    </div>
  );
}
