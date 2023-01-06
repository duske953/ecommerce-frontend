import { useSWRConfig } from "swr";
import { Navigate, useFetcher, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useUser } from "../../hooks/swrhook";
import { sendRequestToBackend } from "../../utilities/utility";
import { renderToastify, updateToastify } from "../../utilities/toastify";
import Err404 from "../../components/Err404";
import Title from "../../components/Title";
import { ButtonLink } from "../../components/Button";
import { Outlet } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineUpload } from "react-icons/ai";
import { useRef } from "react";
import { BsFillUnlockFill } from "react-icons/bs";
import { GiConfirmed } from "react-icons/gi";
import { Input } from "@mui/material";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsList } from "react-icons/bs";
import { useState } from "react";
export default function UserAccountRoute() {
  const { user, userLoading, userError } = useUser();
  const { userId } = useParams();
  let inputRef = useRef(null);
  const { mutate } = useSWRConfig();
  const Fetcher = useFetcher();
  const [profileImg, setProfileImg] = useState("");
  const [nav, setNav] = useState(false);
  if (!userLoading) {
    if (user?.message === null || !user?.message)
      return <Navigate to="/login" replace />;

    if (userId !== user?.data.user?._id) {
      return (
        <>
          <Err404 />;
          <Title title="404 page not found" />
        </>
      );
    }
  }

  // function handleFileChange(e) {
  //   setProfileImg(e.target.files[0]);
  // }

  function handleToggleNav(e) {
    setNav(!nav);
  }

  // async function handleSubmit(e) {
  //   const id = renderToastify("Uploading img");
  //   try {
  //     e.preventDefault();
  //     const formData = new FormData();
  //     formData.append("profileImg", profileImg);
  //     const response = await sendRequestToBackend(
  //       "post",
  //       "users",
  //       formData,
  //       "uploadImg"
  //     );
  //     updateToastify(id, "Image uploaded successfully", "success");
  //     inputRef.current.reset();
  //     mutate("http://localhost:3000/api/v1/users/isLoggedIn");
  //   } catch (err) {
  //     updateToastify(id, err.response.data.message, "error");
  //   }
  // }
  return (
    <>
      <Navbar />
      <Title title="User dashboard" />
      <AiOutlineArrowRight
        className="navbar-section__nav-icon
      dashboard-section__icon"
        onClick={handleToggleNav}
        style={{
          transform: nav ? "rotate(180deg)" : "rotate(0)",
          transition: "all 0.4s",
        }}
      />
      <section className="dashboard-section">
        <div className="dashboard-section__container">
          <div
            className={`dashboard-section__user-nav-container ${
              nav ? "dashboard-section__user-nav-container__nav--active" : ""
            }`}
          >
            <ul className="dashboard-section__user-nav-box">
              <li className="dashboard-section__user-nav-item">
                <AiOutlineUser className="dashboard-section__user-nav-icon" />
                <ButtonLink
                  link="userInfo"
                  title="User Info"
                  onClick={handleToggleNav}
                />
              </li>
              <li className="dashboard-section__user-nav-item">
                <BsFillUnlockFill className="dashboard-section__user-nav-icon" />
                <ButtonLink
                  link="updatePassword"
                  title="Change Password"
                  onClick={handleToggleNav}
                />
              </li>
              <li className="dashboard-section__user-nav-item">
                <GiConfirmed className="dashboard-section__user-nav-icon" />
                <ButtonLink
                  link="confirmEmail"
                  title="Activate account"
                  onClick={handleToggleNav}
                />
              </li>
              <li className="dashboard-section__user-nav-item">
                <AiFillDelete className="dashboard-section__user-nav-icon" />
                <ButtonLink
                  link="deleteAccount"
                  title="Delete Account"
                  onClick={handleToggleNav}
                />
              </li>
              {/* <li className="dashboard-section__user-nav-item">
                <form method="post" onSubmit={handleSubmit} ref={inputRef}>
                  <Input
                    type="file"
                    onChange={handleFileChange}
                    className="input-file"
                  />
                  <div className="upload-box">
                    <button type="submit" onClick={handleToggleNav}>
                      <AiOutlineUpload className="dashboard-section__user-nav-icon" />
                    </button>
                    <p>Upload profile Img</p>
                  </div>
                </form>
              </li> */}
            </ul>
          </div>
          <Outlet />
        </div>
      </section>
    </>
  );
}
