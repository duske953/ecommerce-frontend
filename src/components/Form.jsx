import { useUser } from "../hooks/swrhook";
import { useSWRConfig } from "swr";
import { loadingContext } from "../reactContext/loading";
import { useFetcher, Navigate, useLocation } from "react-router-dom";

export default function Forms({ children, img, infoText, action }) {
  const fetcher = useFetcher();
  const { mutate } = useSWRConfig();
  const location = useLocation();
  const { user, isLoading, isError } = useUser();
  const from = location?.state?.pathname || "/";
  if (user?.message || fetcher?.data === "authenticated") {
    mutate("https://oek-ecommerce-backend.vercel.app/api/v1/users/isLoggedIn");
    return <Navigate to={from} replace={true} />;
  }
  return (
    <section className="section-form">
      <div className="section-form__container">
        <fetcher.Form
          method="post"
          className="section-form__form"
          action={action}
        >
          <div className="section-form__img-box">
            <img className="section-form__img" src={img} />
          </div>
          <div className="section-form__input">
            <h2 className="secondary-heading">{infoText}</h2>
            <loadingContext.Provider value={fetcher.state}>
              {children}
            </loadingContext.Provider>
          </div>
        </fetcher.Form>
      </div>
    </section>
  );
}
