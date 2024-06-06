import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search_icon.svg";
import bellIcon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { logout } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <ul className="navbar-menu">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={searchIcon} alt="Search" className="icons" />
        <p>Children</p>
        <img src={bellIcon} alt="Bell" className="icons" />
        <div
          className="navbar-profile"
          onClick={toggleDropdown}
          aria-haspopup="true"
          aria-expanded={dropdownVisible}
        >
          <img src={profile_img} alt="Profile" className="profile" />
          <img src={caret_icon} alt="Caret" />
          {dropdownVisible && (
            <div className="dropdown">
              <p onClick={handleLogout}>Sign Out of MoveApp</p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
