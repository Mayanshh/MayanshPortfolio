import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import '../style.css';

const Page3 = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (textRef.current) {
      const lines = textRef.current.querySelectorAll('.lines'); // Correctly query the lines within textRef

      // Initial text color setup
      gsap.set(lines, { color: '#ccc' });

      // ScrollTrigger animation
      gsap.to(lines, {
        color: '#fff', // Target color
        opacity:1,
        duration: 1, // Duration of animation
        stagger: 0.2, // Delay between each line
        ease: 'power2.inOut', // Smooth transition
        scrollTrigger: {
          trigger: textRef.current, // Trigger animation based on the parent element
          start: 'top center', // Start when the parent reaches the bottom of the viewport
          end: 'top -20%', // End when the parent reaches the center of the viewport
          scroller: '#root', // Scroll container

          scrub: 2, // Smooth scrubbing
          toggleActions: 'play none none reset', // Animation actions
        },
      });
    }
  }, []);

  return (
    <div id="page3">
      <video className="background-video" autoPlay loop muted playsInline>
      7            <source src="../assets/bgVid.mp4" type="video/mp4" />
      8            Your browser does not support the video tag.
      9        </video>
      <h1 id="about"> - ABOUT</h1>
      <div id="aboutPara" ref={textRef}>

        <h4 className="lines">I’m Mayansh Bangali,</h4>
        <h4 className="lines">a Software Engineer focused</h4>
        <h4 className="lines">on crafting intelligent systems</h4>
        <h4 className="lines">and immersive experiences in AI,</h4>
        <h4 className="lines">Machine Learning, Virtual Reality,</h4>
        <h4 className="lines">and Full Stack Development.</h4>
        <h4 className="lines">My work revolves around building</h4>
        <h4 className="lines">thoughtful solutions that simplify</h4>
        <h4 className="lines">complexity and create lasting value.</h4>


      </div>
    </div>
  );
};

export default Page3;