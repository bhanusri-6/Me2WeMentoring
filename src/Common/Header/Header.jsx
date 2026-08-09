import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="site-header-inner container">

        {/* LOGO */}
        <div className="site-header-logo">
          <Link to="/" onClick={closeMenu}>
            <img
              src="/images/logo/M2W.png"
              alt="M2W"
            />
          </Link>
        </div>

        {/* NAVIGATION */}
        <nav
          className={`site-header-nav ${
            menuOpen ? "is-open" : ""
          }`}
        >
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>
                Command
              </Link>
            </li>

            <li>
              <Link to="/about" onClick={closeMenu}>
                Vision
              </Link>
            </li>

            <li>
              <Link to="/System" onClick={closeMenu}>
                Systems
              </Link>
            </li>

            <li>
              <Link to="/#Testimonials" onClick={closeMenu}>
                Network
              </Link>
            </li>

            <li>
              <Link to="/journeys" onClick={closeMenu}>
                Journeys
              </Link>
            </li>

            <li>
              <Link to="/Contact" onClick={closeMenu}>
                Activate
              </Link>
            </li>
          </ul>
        </nav>

        {/* RIGHT SIDE */}
        <div className="site-header-right">

          <div className="site-header-phone">
            <span>Need Help?</span>

            <i className="fa fa-phone"></i>

            <a href="tel:+918618989524">
              +91 86189 89524
            </a>
          </div>

          {/* MOBILE MENU */}
          <button
            type="button"
            className={`site-header-toggle ${
              menuOpen ? "active" : ""
            }`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={
              menuOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

      </div>
    </header>
  );
};

export default Header;