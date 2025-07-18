import "./HomeNavbar.css";
import logo from "../../assets/logoAlme.png";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import mobileBg from "../../assets/imgsMobile/imgMobileBackgroundHome.jpg";
import desktopBg from "../../assets/imgsDesktop/imgDesktopBackgroundHome.jpg";

const HomeNavbar = ({ id }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);
  const location = useLocation();
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  useEffect(() => {
    if (isSafari) {
      const img = new Image();
      const bgToLoad = window.innerWidth < 768 ? mobileBg : desktopBg;
      
      img.src = bgToLoad;
      img.decode().then(() => {
        setBgLoaded(true);
      }).catch(() => {
        setBgLoaded(true);
      });
      
      const secondaryImg = new Image();
      secondaryImg.src = window.innerWidth < 768 ? desktopBg : mobileBg;
    } else {
      const mobileImage = new Image();
      const desktopImage = new Image();
      
      mobileImage.src = mobileBg;
      desktopImage.src = desktopBg;
      
      const checkLoad = () => setBgLoaded(true);
      
      mobileImage.onload = checkLoad;
      desktopImage.onload = checkLoad;
    }

    const timer = setTimeout(() => setBgLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, [isSafari]);

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      className={`container-homenavbar ${bgLoaded ? "loaded" : "loading"}`} 
      id={id}
    >
      <link 
        rel="preload" 
        href={mobileBg} 
        as="image" 
        media="(max-width: 767px)"
        fetchpriority="high"
      />
      <link 
        rel="preload" 
        href={desktopBg} 
        as="image" 
        media="(min-width: 768px)"
        fetchpriority="high"
      />
      
      <div className="overlay-homenavbar" />
      <div className="top-homenavbar">
        <div className="logo-homenavbar">
          <Link to="/">
            <img
              src={logo}
              alt="Logo da Empresa"
              className="logo-image-homenavbar"
              loading="eager"
              fetchpriority="high"
            />
          </Link>
        </div>

        <button
          className="menu-toggle-homenavbar"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`nav-menu-homenavbar ${menuOpen ? "open" : ""}`}>
          <ul className="menu-list-homenavbar">
            <Link to="/" className={isActive("/") ? "active" : ""}>
              Home
            </Link>
            <Link
              to="/quemSomos"
              className={isActive("/quemSomos") ? "active" : ""}
            >
              Quem Somos
            </Link>
            <Link
              to="/comoAquecer"
              className={isActive("/comoAquecer") ? "active" : ""}
            >
              Como Aquecer
            </Link>
            <Link
              to="/contato"
              className={isActive("/contato") ? "active" : ""}
            >
              Contato
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HomeNavbar;