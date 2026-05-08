import ButtonPromotion from "../../components/ButtonPromotion";
import PromotionCard from "../../components/PromotionCard";

export default function Promotion() {
  return (
    <>
      <main>
        <section className="app-container app-mt20">
          <PromotionCard />
          <ButtonPromotion />
        </section>
      </main>
    </>
  );
}
