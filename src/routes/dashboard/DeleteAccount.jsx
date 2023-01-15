import { useState } from "react";
import { useUser } from "../../hooks/swrhook";
import { useFetcher, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useSWRConfig } from "swr";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { renderToastify, updateToastify } from "../../utilities/toastify";
import { sendRequestToBackend } from "../../utilities/utility";
import { Button } from "../../components/Button";
import { RenderError } from "../../utilities/utility";
import Input from "../../components/Input";
export default function DeleteAccount() {
  const navigate = useNavigate();
  const { user } = useUser();
  const [Modal, setModal] = useState(false);
  const [value, setValue] = useState("");
  const [inputError, setInputError] = useState(false);
  const { mutate } = useSWRConfig();
  function handleChange(e) {
    setValue(e.target.value);
  }

  async function handleConfirmDelete() {
    try {
      if (value !== "DELETE ACCOUNT PERMANENTLY") return setInputError(true);
      const response = await sendRequestToBackend(
        "delete",
        "users",
        {
          Email: formik.values.Email,
          Password: formik.values.Password,
        },
        "deleteAccount"
      );
      toast("Account deleted...", { type: "success" });
      setModal(!Modal);
      mutate(
        "https://oek-ecommerce-backend.vercel.app/api/v1/users/isLoggedIn"
      );
      window.location.href = "/";
    } catch (err) {
      toast(err.response.data.message, { type: "error" });
    }
  }

  const Fetcher = useFetcher();
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      Email: "",
      Password: "",
    },
    validationSchema: yup.object({
      Email: yup
        .string()
        .email("Invalid email address")
        .required("Please enter Email address"),
      Password: yup.string().required("Please enter your Password"),
    }),
  });

  async function handleDelete() {
    const id = renderToastify("Processing");
    try {
      const response = await sendRequestToBackend(
        "delete",
        "users",
        {
          Email: formik.values.Email,
          Password: formik.values.Password,
          status: "pendingDelete",
        },
        "deleteAccount"
      );
      setModal(!Modal);
      updateToastify(id, "Action required", "info");
    } catch (err) {
      updateToastify(id, err.response.data.message, "error");
    }
  }
  return (
    <>
      <Fetcher.Form method="patch">
        <div className="dashboard-section__user-info">
          <h2 className="secondary-heading">Delete Account</h2>
          <Input
            inputId="Email"
            type="email"
            placeholder="Please enter your email address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Email}
          >
            <RenderError formik={formik} attr="Email" />
          </Input>
          <Input
            inputId="Password"
            type="password"
            placeholder="Please enter your password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Password}
          >
            <RenderError formik={formik} attr="Password" />
          </Input>
          <div>
            <Button
              type="button"
              msg="Delete Account"
              nameClass="primary-button dashboard-section__delete-btn"
              style="idle"
              isDisabled={!formik.isValid}
              onClick={handleDelete}
            />
          </div>
        </div>
        <Popup
          position="bottom center"
          modal={true}
          closeOnDocumentClick={true}
          open={Modal}
          onClose={() => {
            setModal(!Modal);
          }}
        >
          <div>
            <p>
              Please enter the term "<b>DELETE ACCOUNT PERMANENTLY</b>" to
              proceed
            </p>
            <Input
              type="text"
              placeholder=""
              inputId="Text"
              onChange={handleChange}
              value={value}
            />
            <Button
              type="button"
              msg="Confirm action"
              nameClass="primary-button dashboard-section__delete-btn"
              style="idle"
              onClick={handleConfirmDelete}
            />
            {inputError ? <p>Incorrect...</p> : ""}
          </div>
        </Popup>
      </Fetcher.Form>
    </>
  );
}
