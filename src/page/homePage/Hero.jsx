import SearchBox from "../../components/SearchBox";
import HeroImg from "../../assets/undraw_window_shopping_re_0kbm.svg";
import Skeleton from "react-loading-skeleton";
export default function Hero({ state }) {
  return (
    <section className="hero-section">
      <div className="hero-section__container">
        <div className="hero-section__content">
          <h1 className="primary-heading m-bottom-sm">
            {state === "loading" ? (
              <Skeleton />
            ) : (
              "Get everything you ever wanted right from the comfort of your home"
            )}
          </h1>
          <SearchBox />
        </div>
        <div className="hero-section__img-box">
          <img
            className="hero-section__img"
            src={HeroImg}
            alt="woman shopping"
          />
        </div>
      </div>
    </section>
  );
}
