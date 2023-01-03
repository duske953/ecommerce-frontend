import { useFormik } from "formik";
import Title from "../components/Title";
import * as yup from "yup";
import { RenderError } from "../utilities/utility";
import { useFetcher } from "react-router-dom";
import { Button } from "../components/Button";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Footer from "../components/Footer";
import Forms from "../components/Form";
import SignImg from "../assets/undraw_sign_in_re_o58h.svg";

export default function SignupRoute() {
  const fetcher = useFetcher();
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      Name: "kennedy",
      Email: "kennyduske@gmail.com",
      Password: "kennedys",
      ConfirmPassword: "kennedys",
    },
    validationSchema: yup.object({
      Name: yup.string().required("Your name is requried"),
      Email: yup
        .string()
        .email("Invalid email address")
        .required("Email is required"),
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
  return (
    <>
      <Navbar />
      <Title title="Signup" />
      <Forms img={SignImg} infoText="Create Account" action="/signup">
        <Input
          onChange={formik.handleChange}
          value={formik.values.Name}
          inputId="Name"
          type="text"
          onBlur={formik.handleBlur}
          placeholder="Eloho Kennedy"
        >
          <RenderError formik={formik} attr="Name" />
        </Input>
        <Input
          onChange={formik.handleChange}
          value={formik.values.Email}
          inputId="Email"
          type="email"
          onBlur={formik.handleBlur}
          placeholder="elohokennedy@gmail.com"
        >
          <RenderError formik={formik} attr="Email" />
        </Input>
        <Input
          onChange={formik.handleChange}
          value={formik.values.Password}
          inputId="Password"
          type="password"
          onBlur={formik.handleBlur}
          placeholder="*********"
        >
          <RenderError formik={formik} attr="Password" />
        </Input>
        <Input
          onChange={formik.handleChange}
          value={formik.values.ConfirmPassword}
          inputId="ConfirmPassword"
          type="password"
          onBlur={formik.handleBlur}
          placeholder="*********"
        >
          <RenderError formik={formik} attr="ConfirmPassword" />
        </Input>
        <Button msg="signup" isDisabled={!formik.isValid} nameClass="form" />
      </Forms>
      <Footer />
    </>
  );
}
