import { useState } from "react";
import { useSubmit, Link } from "react-router-dom";
import { useUser } from "../hooks/swrhook";
import { ButtonLink, Button } from "./Button";
import { Logout } from "../utilities/utility";
import { useSWRConfig } from "swr";
import SearchField from "react-search-field";
import { BsCart } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { navbarData } from "../utilities/navbardata";
import Skeleton from "react-loading-skeleton";
import { renderToastify, updateToastify } from "../utilities/toastify";

export default function Navbar() {
  const { mutate } = useSWRConfig();
  const submit = useSubmit();
  const [navActive, setNavActive] = useState(false);
  const { user, userLoading } = useUser();
  async function handleLogOut(e) {
    const id = renderToastify("Logging you out...");
    try {
      e.preventDefault();
      await mutate(
        "https://oek-ecommerce-backend.vercel.app/api/v1/users/isLoggedIn",
        Logout()
      );
      updateToastify(id, "You've been logged out of your account");
    } catch (err) {
      updateToastify(
        id,
        "Something went wrong while trying to log you out",
        "error"
      );
    }
  }

  function handleInputEvent(value) {
    let formData = new FormData();
    formData.append("q", value);
    formData.append("page", 1);
    submit(formData, {
      action: "/products/search",
      method: "get",
    });
  }

  function handleToggleNav(e) {
    if (e.target.getAttribute("data-click") === "no-nav") return;
    setNavActive(!navActive);
  }

  return (
    <section className="navbar-section">
      <header className="navbar-section__header">
        <div className="navbar-section__heading-box">
          <BsList
            className="navbar-section__nav-icon"
            onClick={handleToggleNav}
          />
          <p className="navbar-section__logo">Tech-Freak</p>
        </div>

        <SearchField
          placeholder="Search tech..."
          classNames="input-comp"
          onEnter={handleInputEvent}
          onSearchClick={handleInputEvent}
        />

        <nav className="navbar-section__box">
          <ul>
            {userLoading ? (
              <Skeleton width={350} height={25} borderRadius="0.4rem" />
            ) : (
              <>
                {" "}
                <li>
                  <ButtonLink link="/" title="Home" />
                </li>
                <li>
                  {user?.message ? (
                    <button
                      onClick={handleLogOut}
                      className="btn navbar-section__btn-logout"
                    >
                      Logout
                    </button>
                  ) : (
                    <ButtonLink link="/login" title="Login" />
                  )}
                </li>
                <li>
                  {user?.message ? (
                    <Link
                      className="navbar-section__user"
                      to={`/user/${user.data.user._id}`}
                    >
                      <p>Hi, {user.data.user.Name}</p>
                    </Link>
                  ) : (
                    <ButtonLink
                      link="/signup"
                      title="Signup"
                      nameClass="navbar-section__sign"
                    />
                  )}
                </li>
                {user?.message ? (
                  <li>
                    <p>{user.data.user.products.length}</p>
                    <ButtonLink
                      link={`/cart`}
                      title={<BsCart />}
                      nameClass="navbar-section__cart"
                    />
                  </li>
                ) : (
                  ""
                )}
              </>
            )}
          </ul>
        </nav>
      </header>
      <div
        className={`navbar-section__nav-container ${
          navActive ? "navbar-section__nav-container--active" : ""
        }`}
      >
        <div
          className="navbar-section__nav-box"
          onClick={handleToggleNav}
          data-click="no-nav"
        >
          <p className="navbar-section__nav-heading" data-click="no-nav">
            Categories
          </p>
          <ul className="navbar-section__nav-categories" data-click="no-nav">
            {navbarData.map((el, i) => (
              <li
                className="navbar-section__category-item"
                data-click="no-nav"
                key={el.title}
              >
                <ButtonLink
                  nameClass={"navbar-section__category-link"}
                  link={el.link}
                  title={el.title}
                />
              </li>
            ))}
          </ul>
        </div>
        <AiOutlineClose
          className="navbar-section__nav-close"
          onClick={handleToggleNav}
        />
      </div>
      <div
        onClick={handleToggleNav}
        className={`navbar-section__nav-overlay${
          navActive ? " navbar-section__nav-overlay--active" : " "
        }`}
      ></div>
    </section>
  );
}
