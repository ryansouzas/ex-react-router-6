import { Link, NavLink } from "react-router-dom";
import "./styles.css";

export default function Header() {
  return (
    <header className="app-header">
      <nav className="app-container">
        <Link to="/Home">
          <h1>MeuSite</h1>
        </Link>

        <nav className="app-nav-links">
          <ul>
            <li>
              <NavLink
                to="/Home"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Início
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Promotion"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Promoção
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Enrollment"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Participar
              </NavLink>
            </li>
          </ul>
        </nav>
      </nav>
    </header>
  );
}
