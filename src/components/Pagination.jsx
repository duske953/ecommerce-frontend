import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export default function Pagination(props) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button className="pagination-btn">
        <Link
          onClick={props.decrease}
          style={{ pointerEvents: props.page - 1 === 0 ? "none" : "auto" }}
          to={`${props.route}=${props.page - 1}`}
        >
          <BsFillArrowLeftCircleFill />
        </Link>
        <p>{props.page}</p>
        <Link
          onClick={props.increase}
          style={{ pointerEvents: props.searchedProduct < 8 ? "none" : "auto" }}
          to={`${props.route}=${props.page + 1}`}
        >
          <BsFillArrowRightCircleFill />
        </Link>
      </button>
    </div>
  );
}
