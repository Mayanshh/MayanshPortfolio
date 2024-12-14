import React from 'react';
import '../style.css';

const Text = () => {
  // Function to handle scrolling to #page2
  const handleScroll = () => {
    const page2Element = document.querySelector('#page2');
    if (page2Element) {
      page2Element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="textBox">
      <h1 id="title">I am Mayansh,</h1>
      <div id="underline"></div>
      <p id="info">
        Full Stack Web Developer & Software Engineer based in India.
      </p>
      <button id="btn" onClick={handleScroll}>
        Know more
      </button>
    </div>
  );
};

export default Text;
