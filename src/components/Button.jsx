import { useContext } from "react";
import { loadingContext } from "../reactContext/loading";
import { Link } from "react-router-dom";
export function ButtonLink({ link, title, nameClass, icon, onClick }) {
  return (
    <Link
      className={`anchor ${nameClass ? nameClass : ""}`}
      to={link}
      preventScrollReset={true}
      onClick={onClick}
    >
      {title}
    </Link>
  );
}

export function Button({
  style = useContext(loadingContext),
  msg,
  isDisabled,
  nameClass,
  onClick,
  type = "submit",
}) {
  return (
    <button
      className={`btn ${nameClass ? `btn__${nameClass}` : ""}`}
      disabled={isDisabled}
      type={type}
      onClick={onClick}
      style={{
        backgroundColor: style === "idle" ? "#1c7ed6" : "#74c0fc",
        cursor: style === "idle" ? "pointer" : "default",
        pointerEvents: style === "idle" ? "auto" : "none",
      }}
    >
      {msg}
    </button>
  );
}
