import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./outlet.css";
import BlogDisplay from "./BlogDisplay";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav-bar">
      <div className="nav-logo">
        <img src={logo} alt="NAROSUNDAR LOGO" />
      </div>

      <div className={`nav-section ${menuOpen ? "active" : ""}`}>
        <div className="nav-links">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/service" onClick={() => setMenuOpen(false)}>
            Service
          </NavLink>
          <NavLink to="/gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </NavLink>

          {/* Inline Blog Accordion */}
          <BlogDisplay />

          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
          <NavLink to="/register" onClick={() => setMenuOpen(false)}>
            Register
          </NavLink>
          <NavLink to="/register/login" onClick={() => setMenuOpen(false)}>
            Login
          </NavLink>
        </div>

        <button className="quote-btn" onClick={() => setMenuOpen(false)}>
          FREE QUOTE
        </button>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
