import { useFetcher } from "react-router-dom";
import Input from "../../components/Input";
import { Button } from "../../components/Button";
import { useFormik } from "formik";
import { RenderError } from "../../utilities/utility";
import * as yup from "yup";

export default function UpdatePassword() {
  const Fetcher = useFetcher();
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      oldPassword: "",
      newPassword: "",
      passwordConfirm: "",
    },
    validationSchema: yup.object({
      oldPassword: yup.string().required("Please enter your old password"),
      newPassword: yup
        .string()
        .required("Please enter your new Password")
        .min(8, "Your password must be a minimum of 8 characters"),
      passwordConfirm: yup
        .string()
        .required("Please confirm your password")
        .oneOf([yup.ref("newPassword")], "Password's dont match"),
    }),
  });
  const loadingState = Fetcher.state;
  return (
    <>
      <Fetcher.Form method="patch">
        <div className="dashboard-section__user-info">
          <h2 className="secondary-heading">Change password</h2>
          <Input
            type="password"
            placeholder="Your old password"
            inputId="oldPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.oldPassword}
            label="Old password"
          >
            <RenderError formik={formik} attr="oldPassword" />
          </Input>
          <Input
            type="password"
            placeholder="Your new password"
            inputId="newPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.newPassword}
            label="New password"
          >
            <RenderError formik={formik} attr="newPassword" />
          </Input>
          <Input
            type="password"
            placeholder="confirm password"
            inputId="passwordConfirm"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.passwordConfirm}
            label="Confirm password"
          >
            <RenderError formik={formik} attr="passwordConfirm" />
          </Input>
          <Button
            msg="Change password"
            nameClass="primary-button"
            style={
              loadingState === "loading" || loadingState === "submitting"
                ? "processing"
                : "idle"
            }
            isDisabled={
              !formik.isValid ||
              Fetcher.state === "submitting" ||
              Fetcher.state === "loading"
            }
          />
        </div>
      </Fetcher.Form>
    </>
  );
}
