import React from "react";
import "./Navbar.css";
import HamburgerMenu from "react-hamburger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="navbar-container">
      <div className="logo">IKS</div>
      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
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
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>

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
