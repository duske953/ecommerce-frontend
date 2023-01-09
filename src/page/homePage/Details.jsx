import laptopImg from "../../assets/giorgio-trovato-8krX0HkXw8c-unsplash.jpg";
import headPhone from "../../assets/joel-de-vera-RgMOBFLGoZM-unsplash.jpg";
import Phone from "../../assets/v-a-tao-OxvlDO8RwKg-unsplash.jpg";

export function Details() {
  return (
    <>
      <section className="section-details">
        <div className="section-details__container">
          <h2 className="secondary-heading section-details__heading">
            With our services, You'll be updated with the latest tech and
            gadgets in the industry
          </h2>
          <div className="section-details__img-box">
            <img
              className="section-details__img"
              src={headPhone}
              alt="Image of a headphone"
            />
          </div>
          <div className="section-details__img-box">
            <img
              className="section-details__img"
              src={laptopImg}
              alt="Image of a laptop"
            />
          </div>
          <div className="section-details__img-box">
            <img
              className="section-details__img"
              src={Phone}
              alt="image of a phone"
            />
          </div>
        </div>
      </section>
    </>
  );
}
