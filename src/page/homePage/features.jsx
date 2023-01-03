import { MdLocalShipping } from "react-icons/md";
import { AiFillCreditCard } from "react-icons/ai";
import { BsCashStack } from "react-icons/bs";

function FeatureCard({ icon, title, details }) {
  return (
    <div className="features-section__item">
      <p style={{ fontSize: "4.4rem" }}>{icon}</p>
      <div className="features-section__details">
        <p className="features-section__title">{title}</p>
        <p className="features-section__details">{details}</p>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section className="features-section">
      <div className="features-section__container">
        <div className="features-section__box">
          <FeatureCard
            icon={<MdLocalShipping />}
            title="Free Shipping"
            details="Capped at $60 an hour"
          />
          <FeatureCard
            icon={<AiFillCreditCard />}
            title="Secure Payments"
            details="6months installments"
          />
          <FeatureCard
            icon={<BsCashStack />}
            title="14 Day Returns"
            details="Shop with confidence"
          />
        </div>
      </div>
    </section>
  );
}
