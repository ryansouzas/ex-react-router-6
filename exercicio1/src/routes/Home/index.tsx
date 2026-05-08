import ButtonHome from "../../components/ButtonHome";
import HomeCard from "../../components/HomeCard";

export default function Home() {
  return (
    <>
      <main>
        <section className="app-container app-mt20">
          <HomeCard />
          <ButtonHome />
        </section>
      </main>
    </>
  );
}
