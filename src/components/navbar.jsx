import React, { useState } from "react";
import "../style.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);


  const handleSmoothScroll = (e, target) => {
    e.preventDefault(); // Prevent the default anchor behavior
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  
  return (
    <div id="nav">
      <h1 id="text">MAYANSH.</h1>
      <div className="menu-container">
        <label className="hamburger">
          <input
            type="checkbox"
            onChange={() => setIsOpen(!isOpen)}
            checked={isOpen}
          />
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            />
            <path className="line" d="M7 16 27 16" />
          </svg>
        </label>
        <div className={`menu-links ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#page1" onClick={(e) => handleSmoothScroll(e, '#home')}>Home</a>
            </li>
            <li>
              <a href="#page3" onClick={(e) => handleSmoothScroll(e, '#page3')}>About</a>
            </li>
            <li>
              <a href="#page4" onClick={(e) => handleSmoothScroll(e, '#page4')}>Projects</a>
            </li>
            <li>
              <a href="#page5" onClick={(e) => handleSmoothScroll(e, '#page5')}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
