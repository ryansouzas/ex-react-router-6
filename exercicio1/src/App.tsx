import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ClientSite from "./routes/ClientSite";
import Home from "./routes/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientSite />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
