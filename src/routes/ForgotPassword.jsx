import { useFetcher, Navigate,useActionData } from "react-router-dom";
import { useRef,useEffect } from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Input from "../components/Input";
import { useUser } from "../hooks/swrhook";
import { Button } from "../components/Button";
import { useFormik } from "formik";
import Footer from "../components/Footer";
import * as yup from "yup";
export default function ForgotPassword() {
  const Fetcher = useFetcher();
  const formRef = useRef(null);
  const loadingState = Fetcher.state;
  const message = useActionData()
  const { user, userLoading, userError } = useUser();
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      Email: "",
    },
    validationSchema: yup.object({
      Email: yup
        .string()
        .email("invalid email address")
        .required("Please enter your Email address"),
    }),
  });

  useEffect(() => {
   if(message?.message) formik.resetForm();
  },[message])

  if (!userLoading && user?.message === "User is logged in") {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Navbar />
      <Title title="Forgot password" />
      <Fetcher.Form method="post" ref={formRef}>
        <section className="g-input-box">
          <h1>Forgot password?</h1>
          <Input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            inputId="Email"
            placeholder="Enter your email address"
            type="text"
            value={formik.values.Email}
          />
          <Button
            style={
              loadingState === "loading" || loadingState === "submitting"
                ? "processing"
                : "idle"
            }
            msg="Submit"
            nameClass="primary-button"
            isDisabled={
              !formik.isValid ||
              loadingState === "submitting" ||
              loadingState === "loading"
            }
          />
        </section>
        <Footer />
      </Fetcher.Form>
    </>
  );
}
