import { Outlet } from "react-router-dom";
import EnrollmentHeader from "../components/EnrollmentHeader";

export default function EnrollmentPage() {
  return (
    <>
      <EnrollmentHeader />
      <Outlet />
    </>
  );
}
