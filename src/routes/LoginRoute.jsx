import { useFormik } from "formik";
import Title from "../components/Title";
import * as yup from "yup";
import { Button } from "../components/Button";
import Form from "../components/Form";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import { RenderError } from "../utilities/utility";
import Footer from "../components/Footer";
import LoginImg from "../assets/undraw_login_re_4vu2.svg";
import { ButtonLink } from "../components/Button";

export default function LoginRoute() {
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      Email: "",
      Password: "",
    },
    validationSchema: yup.object({
      Email: yup.string().email("please enter a correct email address"),
      Password: yup.string().required("Please enter your password"),
    }),
  });
  return (
    <>
      <Navbar />
      <Title title="Login" />
      <Form img={LoginImg} infoText="Sign in" action="/login">
        <Input
          onChange={formik.handleChange}
          inputId="Email"
          type="text"
          placeholder="yourname@gmail.com"
          onBlur={formik.handleBlur}
          value={formik.values.Email}
        >
          <RenderError formik={formik} attr="Email" />
        </Input>
        <Input
          onChange={formik.handleChange}
          inputId="Password"
          type="password"
          placeholder="*********"
          onBlur={formik.handleBlur}
          value={formik.values.Password}
        />
        <Button msg="Login" isDisabled={!formik.isValid} nameClass="form" />
        <div className="acc-info">
          <ButtonLink
            link="/forgot-password"
            title="forgot password?"
            nameClass="acc-info__btn"
          />
        </div>
      </Form>
      <Footer />
    </>
  );
}
