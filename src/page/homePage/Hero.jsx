import SearchBox from "../../components/SearchBox";
import HeroImg from "../../assets/undraw_window_shopping_re_0kbm.svg";
export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-section__container">
        <div className="hero-section__content">
          <h1 className="primary-heading m-bottom-sm">
            Get everything you ever wanted right from the comfort of your home
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
