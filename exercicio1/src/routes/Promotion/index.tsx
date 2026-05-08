import { Link } from "react-router-dom";
import ButtonPromotion from "../../components/ButtonPromotion";
import PromotionCard from "../../components/PromotionCard";

export default function Promotion() {
  return (
    <>
      <main>
        <section className="app-container app-mt20">
          <PromotionCard />
          <Link to="/Enrollment">
            <ButtonPromotion />
          </Link>
        </section>
      </main>
    </>
  );
}
