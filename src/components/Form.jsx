import { useUser } from '../hooks/swrhook';
import { useSWRConfig } from 'swr';
import { loadingContext } from '../reactContext/loading';
import {
  useFetcher,
  Navigate,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useEffect } from 'react';

export default function Forms({ children, img, infoText, action }) {
  const fetcher = useFetcher();
  const navigate = useNavigate();
  const { mutate } = useSWRConfig();
  const location = useLocation();
  const { user, isLoading, isError } = useUser();
  const from = location?.state?.pathname || '/';

  useEffect(() => {
    async function IsUserLoggedIn() {
      if (user?.message || fetcher?.data === 'authenticated') {
        const user = await mutate(
          `${import.meta.env.VITE_BACKEND_URL}/users/isLoggedIn`
        );
        navigate(`${from}`, { replace: true });
      }
    }

    IsUserLoggedIn();
  }, [fetcher, user]);

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
