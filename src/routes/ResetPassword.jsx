import Navbar from "../components/Navbar";
import Err404 from "../components/Err404";
import Title from "../components/Title";
import Input from "../components/Input";
import { Button } from "../components/Button";
import { RenderError } from "../utilities/utility";
import { useLoaderData, useFetcher } from "react-router-dom";
import { useFormik } from "formik";
import Footer from "../components/Footer";
import * as yup from "yup";
import NetworkError from "../components/NetworkError";
export default function ResetPassword() {
  const data = useLoaderData();
  const Fetcher = useFetcher();
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      Password: "",
      ConfirmPassword: "",
    },
    validationSchema: yup.object({
      Password: yup
        .string()
        .required("password is required")
        .min(8, "Password must be greater than 8 characters"),
      ConfirmPassword: yup
        .string()
        .required("please confirm your password")
        .oneOf([yup.ref("Password")], "Passwords dont' match"),
    }),
  });

  if (data?.err?.message === "Network Error") return <NetworkError />;
  if (data?.status !== 200) return <Err404 />;
  const loadingState = Fetcher.state;
  return (
    <>
      <Navbar />
      <Title title="Reset password" />
      <Fetcher.Form method="patch">
        <section className="g-input-box">
          <h1>Reset your password</h1>
          <Input
            onChange={formik.handleChange}
            value={formik.values.Password}
            inputId="Password"
            type="password"
            onBlur={formik.handleBlur}
            placeholder="Enter your new password"
          >
            <RenderError formik={formik} attr="Password" />
          </Input>
          <Input
            onChange={formik.handleChange}
            value={formik.values.ConfirmPassword}
            inputId="ConfirmPassword"
            type="password"
            onBlur={formik.handleBlur}
            placeholder="Confirm your password"
          >
            <RenderError formik={formik} attr="ConfirmPassword" />
          </Input>
          <Button
            msg="RESET"
            nameClass="primary-button"
            style={
              loadingState === "loading" || loadingState === "submitting"
                ? "processing"
                : "idle"
            }
            type="submit"
            isDisabled={
              !formik.isValid ||
              loadingState === "submitting" ||
              loadingState === "loading"
            }
          />
          <Footer />
        </section>
      </Fetcher.Form>
    </>
  );
}
