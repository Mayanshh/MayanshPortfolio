import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import "../style.css";
import "../project.css";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const projects = [
  {
    id: 1,
    image: "../assets/projectImages/artificialIntelligence.png",
    category: "Artificial Intelligence",
    title: "AI Assitant",
    link: "https://max-ai-chatbot.netlify.app/",
    about: "Step into the future of conversations with this AI-powered chatbot, crafted to deliver intelligent, human-like interactions. Whether you need assistance or just a chat, it’s always ready to connect seamlessly.",
  },
  {
    id: 2,
    image: "../assets/projectImages/ManicOg.png",
    category: "Music Streaming",
    title: "Manic - The Vibe Wizzard",
    link: "https://manic.netlify.app/",
    about: "Manic is an intuitive and immersive music streaming web app designed to deliver a seamless listening experience with a clean interface and smooth functionality.",
  },
  {
    id: 3,
    image: "../assets/projectImages/airpods.png",
    category: "Apple Clone",
    title: "Apple Airpods Pro - Clone",
    link: "https://airpods-pro2.netlify.app/",
    about: "A sleek and responsive clone of the Apple AirPods Pro website, showcasing a modern design and dynamic interactions that replicate the look and feel of the original site.",
  },
  {
    id: 4,
    image: "../assets/projectImages/cyberSecurity.png",
    category: "Cyber Security",
    title: "A Login Clone",
    link: "https://snap-authentication.netlify.app/",
    about: "A cybersecurity project with a sleek interface inspired by the Snapchat login page, combining modern design with robust security features.",
  },
  {
    id: 5,
    image: "../assets/projectImages/ManicPro.png",
    category: "Spotify Inspired",
    title: "Manic Pro - Redesigned",
    link: "https://manic-spotify.netlify.app/",
    about: "Manic Pro is a high-quality Spotify-inspired web app, featuring an elegant design and advanced functionality for an exceptional music streaming experience.",
  },
  {
    id: 6,
    image: "../assets/projectImages/space.jpeg",
    category: "Envireounmental Impact",
    title: "Cosmos",
    link: "https://6702bb29e04bca7de0857ca7--marvelous-frangipane-9c6fdb.netlify.app/",
    about: "Cosmos is a creatively designed website focused on the Sustainable Development Goals (SDGs) and environmental impact, enhanced with immersive VR features for an engaging user experience.",
  },
];

const Page4 = () => {
  const [modalData, setModalData] = useState(null);
  const cardContainerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (cardContainerRef.current) {
      const cards = cardContainerRef.current.querySelectorAll(".card");

      gsap.set(cards, { x: -50, opacity: 0 });

      gsap.to(cards, {
        x: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: cardContainerRef.current,
          start: "top 80%",
          end: "top 0",
          scrub: 2,
          scroller:'#root',
          markers:false,
          toggleActions: "play none none reset",
        },
      });
    }
  }, []);

  const openModal = (project) => {
    setModalData(project);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div id="page4">
      <h1 id="titleProject">- Projects</h1>
      <div className="portfolio" ref={cardContainerRef}>
        {projects.map((project) => (
          <div
            className="card"
            key={project.id}
            onClick={() => openModal(project)}
          >
            <img src={project.image} alt={project.title} className="card-image" />
            <div className="card-content">
              <div className="card-header">
                <p className="card-category">{project.category}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                  onClick={(e) => e.stopPropagation()} // Prevent modal trigger on link click
                >
                  <HiOutlineArrowUpRight />
                </a>
              </div>
              <h3 className="card-title">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {modalData && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <img src={modalData.image} alt={modalData.title} className="modal-image" />
            <h3 className="modal-title">{modalData.title}</h3>
            <p className="modal-about">{modalData.about}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page4;
