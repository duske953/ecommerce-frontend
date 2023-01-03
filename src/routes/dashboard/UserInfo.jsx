import { useFormik } from "formik";
import { useSWRConfig } from "swr";
import { useUser } from "../../hooks/swrhook";
import { useFetcher, Navigate } from "react-router-dom";
import { Button } from "../../components/Button";
import Input from "../../components/Input";
import * as yup from "yup";
export default function userInfo() {
  const { mutate } = useSWRConfig();
  const { user, userLoading } = useUser();
  const Fetcher = useFetcher();
  const loadingState = Fetcher.state;

  if (Fetcher.data === "ok") {
    mutate("http://localhost:3000/api/v1/users/isLoggedIn");
  }
  const formik = useFormik({
    validateOnMount: true,
    enableReinitialize: true,
    initialValues: {
      Name: `${userLoading ? "" : user.data.user.Name}`,
      Email: `${userLoading ? "" : user.data.user.Email}`,
    },
    validationSchema: yup.object({
      Name: yup.string().required("please enter a correct email address"),
      Email: yup
        .string()
        .required("Please enter your email address")
        .email("Please enter a valid email address"),
    }),
  });

  return (
    <>
      <Fetcher.Form method="patch">
        <div className="dashboard-section__user-info">
          <h2 className="secondary-heading">User details</h2>
          <Input
            type="text"
            value={formik.values.Name}
            inputId="Name"
            placeholder="Please enter your name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Input
            type="text"
            value={formik.values.Email}
            inputId="Email"
            placeholder="Please enter your email address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Button
            msg="Change details"
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
