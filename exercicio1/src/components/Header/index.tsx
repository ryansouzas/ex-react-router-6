import { Link } from "react-router-dom";
import "./styles.css";

export default function Header() {
  return (
    <header className="app-header">
      <nav className="app-container">
        <Link to="/Home">
          <h1>MeuSite</h1>
        </Link>
      </nav>
    </header>
  );
}
