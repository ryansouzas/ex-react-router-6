import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ClientSite from "./routes/ClientSite";
import Home from "./routes/Home";
import Promotion from "./routes/Promotion";
import EnrollmentPage from "./routes/EnrollmentPage";
import Enrollment from "./routes/Enrollment";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientSite />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="Promotion" element={<Promotion />} />
          </Route>
          <Route path="/Enrollment" element={<EnrollmentPage />}>
            <Route index element={<Enrollment />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
