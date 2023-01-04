import React from "react";
import "./Navbar.css";
import HamburgerMenu from "react-hamburger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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
      <div className="logo">IKS</div>
      <div className="navbar-links">
        <button onClick={scrollToHome} className="nav-btn">Home</button>
        <button onClick={scrollToAbout} className="nav-btn">About</button>
        <button onClick={scrollToContact} className="nav-btn">Contact</button>
      </div>
      <div className="search-container">
        {isSearchOpen ? (
          <form>
            <input
              type="text"
              placeholder="Search a product..."
            />
            <div
              className="search-icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </form>
        ) : (
          <div
            className="search-icon"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <FontAwesomeIcon icon={faSearch} />
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
        <button onClick={scrollToHome} className="nav-btn">Home</button>
        <button onClick={scrollToAbout} className="nav-btn">About</button>
        <button onClick={scrollToContact} className="nav-btn">Contact</button>

          <div className="search-container">
            {isSearchOpen ? (
              <form >
                <input
                  type="text"
                  placeholder="Search a product..."
                />
                <div
                  className="search-icon"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </div>
              </form>
            ) : (
              <div
                className="search-icon"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <FontAwesomeIcon icon={faSearch} />
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
