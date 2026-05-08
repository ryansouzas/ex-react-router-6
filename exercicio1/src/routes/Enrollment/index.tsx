import { Link } from "react-router-dom";
import ButtonEnrollment from "../../components/ButtonEnrollment";
import EnrollmentCard from "../../components/EnrollmentCard";

export default function Enrollment() {
  return (
    <>
      <main>
        <section className="app-container app-mt20">
          <EnrollmentCard />
          <Link to="/Promotion">
            <ButtonEnrollment />
          </Link>
        </section>
      </main>
    </>
  );
}
