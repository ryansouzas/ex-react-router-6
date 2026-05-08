import { Link } from "react-router-dom";
import ButtonHome from "../../components/ButtonHome";
import HomeCard from "../../components/HomeCard";

export default function Home() {
  return (
    <>
      <main>
        <section className="app-container app-mt20">
          <HomeCard />
          <Link to="/Promotion">
            <ButtonHome />
          </Link>
        </section>
      </main>
    </>
  );
}
