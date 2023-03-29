import { useState } from "react";
import { FaBars } from "react-icons/fa";
import ShawnLogo from '../../assets/shawnLogo.png';
// import "./navbarStyles.css";
import "./navbarStylesV2.css";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const handleNavCollapse = () => setIsNavExpanded(!isNavExpanded);

  const [NavbarChange, setNavbarChange] = useState(false);

  const changeNavbar =  () => {
    if(window.scrollY >= 2) {
      setNavbarChange(true)
    } else {
      setNavbarChange(false)
    }
  }

  window.addEventListener("scroll", changeNavbar);

  return (
    <nav
      className={NavbarChange ? "custom-navbar navbar navbar-expand-lg navbar-dark fixed-top affix" : "custom-navbar navbar navbar-expand-lg navbar-dark fixed-top"}
    >
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarMenu"
        aria-controls="navbarMenu"
        aria-expanded={!isNavExpanded ? true : false}
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <i className="fa fa-bars">
          <FaBars />
        </i>
      </button>

      <div
        id="navbarMenu"
        className={`${isNavExpanded ? "" : "collapse"} navbar-collapse `}
      >
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <a href="#home" className="nav-link text-uppercase font-weight-bold">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#about"
              className="nav-link text-uppercase font-weight-bold"
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#gallery"
              className="nav-link text-uppercase font-weight-bold"
            >
              Gallery
            </a>
          </li>
        </ul>

        <a href="#home" className="navbar-brand m-auto">
          <img src={ShawnLogo} alt="I heart Estate Logo" className="brand-img" />
          
        </a>

        <ul className="navbar-nav">
          <li className="nav-item portfolio">
            <a
              href="/portfolio"
              className="nav-link text-uppercase font-weight-bold"
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
                    <a href="/contact" className="btn btn-danger ml-xl-4">Contact Us</a>
                </li>
        </ul>
      </div>
    </nav>
  );
}
