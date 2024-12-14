import React from 'react';
import '../style.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Model from './model'; // Ensure this is the correct import

const Page2 = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animation for scrolling text
    gsap.from('#page2 .animatedText', {
      transform: 'rotateX(-80deg)',  // Initial transform
      opacity: 0,                    // Fade in effect
      duration: 1,                   // Animation duration
      stagger: 0.2,                  // Stagger the animations
      scrollTrigger: {
        trigger: '#page2 .animatedText',  // Trigger the animation
        start: 'top bottom',              // Start when the text reaches the bottom of the viewport
        end: 'top top',                  // End when the text reaches the top of the viewport
        scroller: '#root',               // Scroll container
        markers: false,                  // Disable markers for debugging
        scrub: 2,                        // Smooth scroll scrubbing
      },
    });
  });

  return (
    <div id="page2">
      <h1 className="animatedText">INNOVATING</h1>
      <h1 className="animatedText">TODAY</h1>
      <h1 className="animatedText">SHAPING</h1>
      <h1 className="animatedText">TOMORROW</h1>

      <Model />
    </div>
  );
};

export default Page2;