import "./Navbar.css";
import logo from "../../assets/logoAlme.png";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="container-navbar">
      <div className="top-navbar">
        <div className="logo-navbar">
          <Link to="/"><img src={logo} alt="Logo da Empresa" className="logo-image-navbar" /></Link>
        </div>

        <button
          className="menu-toggle-navbar"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`nav-menu-navbar ${menuOpen ? "open" : ""}`}>
          <ul className="menu-list-navbar">
            <Link to="/" className={isActive("/") ? "active" : ""}>Home</Link>
            <Link to="/quemSomos" className={isActive("/quemSomos") ? "active" : ""}>Quem Somos</Link>
            <Link to="/comoAquecer" className={isActive("/comoAquecer") ? "active" : ""}>Como Aquecer</Link>
            <Link to="/contato" className={isActive("/contato") ? "active" : ""}>Contato</Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;