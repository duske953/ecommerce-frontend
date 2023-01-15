import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

let url = "http://localhost:3000/api/v1";
// let url = "https://oek-ecommerce-backend.vercel.app/api/v1";

export async function sendRequestToBackend(method, primaryRoute, data, route) {
  try {
    const response = await axios({
      method,
      url: `${url}/${primaryRoute}${route ? `/${route}` : ""}`,
      withCredentials: true,
      data,
    });
    return response;
  } catch (err) {
    throw err;
  }
}

/**
 *Function To Display generic errrors
 *
 * @export
 * @param {*} { children }
 * @return {*}
 */
export function DisplayErr({ children }) {
  return <div className="u-err">{children}</div>;
}

export function ErrorInput({ err }) {
  return <p className="err-input">{err}</p>;
}

export function RenderError({ formik, attr }) {
  if (formik.errors[attr] && formik.touched[attr])
    return <ErrorInput err={formik.errors[attr]} />;
  return null;
}

//checking if user is logged in
export async function verifyUser() {
  return await sendRequestToBackend("get", "users", null, "verify");
}

export async function Logout() {
  try {
    return await sendRequestToBackend("post", "users", null, "logout");
  } catch (err) {
    throw err;
  }
}

export function changeImageWidth(img, initialWidth, finalWidth) {
  return img.replace(initialWidth, finalWidth);
}
