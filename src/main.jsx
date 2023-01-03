import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routing } from "./routing";
import { ToastContainer } from "react-toastify";
import "./main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      style={{ fontSize: "1.4rem", fontWeight: 500 }}
    />
    <RouterProvider router={routing} />
  </React.StrictMode>
);
