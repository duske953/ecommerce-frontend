import laptopImg from "../../assets/giorgio-trovato-8krX0HkXw8c-unsplash.jpg";
import phoneImg from "../../assets/joel-de-vera-RgMOBFLGoZM-unsplash.jpg";
import micImg from "../../assets/v-a-tao-OxvlDO8RwKg-unsplash.jpg";

export function Details() {
  return (
    <>
      <section className="section-details">
        <div className="section-details__container">
          <h2 className="secondary-heading section-details__heading">
            With our services, You'll be updated with the latest teck and
            gadgets in the industry
          </h2>
          <div className="section-details__img-box">
            <img className="section-details__img" src={phoneImg} alt="" />
          </div>
          <div className="section-details__img-box">
            <img className="section-details__img" src={laptopImg} alt="" />
          </div>
          <div className="section-details__img-box">
            <img className="section-details__img" src={micImg} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
