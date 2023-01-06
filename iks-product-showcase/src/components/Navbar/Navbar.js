import React from "react";
import "./Navbar.css";
import HamburgerMenu from "react-hamburger-menu";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import { animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const scrollToHome = () => {
    const element = document.getElementById("home-container");
    scroll.scrollTo(element.offsetTop);
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about-container");
    scroll.scrollTo(element.offsetTop);
  };

  const scrollToContact = () => {
    const element = document.getElementById("footer-container");
    scroll.scrollTo(element.offsetTop);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <nav className="navbar-container">
      <div className="logo" onClick={scrollToHome}>
        IKS
      </div>
      <div className="navbar-links">
        <button onClick={scrollToHome} className="nav-btn">
          Home
        </button>
        <button onClick={scrollToAbout} className="nav-btn">
          About
        </button>
        <button onClick={scrollToContact} className="nav-btn">
          Contact
        </button>
      </div>
      <div className="search-container">
        {isSearchOpen ? (
          <form>
            <input type="text" placeholder="Search a product..." />
            <div
              className="search-icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <FaSearch height="50px" width="50px" />
            </div>
          </form>
        ) : (
          <div
            className="search-icon"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <FaSearch height="50px" width="50px" />
          </div>
        )}
      </div>
      <div className="menu-container">
        <HamburgerMenu
          isOpen={isOpen}
          menuClicked={() => setIsOpen(!isOpen)}
          width={32}
          height={24}
          strokeWidth={2}
          rotate={0}
          color="#fff"
          borderRadius={0}
          animationDuration={0.7}
          type="sling"
        />
      </div>
      {isOpen && (
        <div className="mobile-menu">
          <button onClick={scrollToHome} className="nav-btn">
            Home
          </button>
          <button onClick={scrollToAbout} className="nav-btn">
            About
          </button>
          <button onClick={scrollToContact} className="nav-btn">
            Contact
          </button>

          <div className="search-container">
            {isSearchOpen ? (
              <form>
                <input type="text" placeholder="Search a product..." />
                <div
                  className="search-icon"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                >
                  <FaSearch height="50px" width="50px" />
                </div>
              </form>
            ) : (
              <div
                className="search-icon"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <FaSearch height="50px" width="50px" />
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
