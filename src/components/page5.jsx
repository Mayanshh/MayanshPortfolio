import React from "react";
import "../style.css";
import { FaArrowUpLong } from "react-icons/fa6";

const Page5 = () => {

  const handleClick = () => {
    window.open("https://www.linkedin.com/in/mayansh-bangali-17ab86331", "_blank");
  };
  
  return (
    <div id='page5'>
      <div id='contactMe'>
        <h1>GET IN TOUCH</h1>
        <p>
          I love to hear from you. Whether you have a question or just want to chat about Web Dev, tech & AI — shoot me a message.
        </p>
      </div>
       <div className="page5-container">
         <div className="contact-section">
           <h2 className="section-title">Reach Me At</h2>
           <a href='mailto:mayanshbangali49@gmail.com' className="contact-detail">mayanshbangali49@gmail.com</a>
         <br/><a href='tel:+917796288980' className="contact-detail">+91 7796 288 980</a>
         </div>
         <div className="social-section">
           <h2 className="section-title">Social</h2>
           <p className="social-links"><a href='https://twitter.com/mayanshB
'>Twitter,  </a><a href='https://www.instagram.com/ic_mayanshh?igsh=dWl4N2VlNmcxZDli&utm_source=qr'>Instagram,  </a><a href='https://github.com/Mayanshh'>Github,  </a></p>
         </div>
         <button className="say-hello-button" onClick={handleClick}>
           View LinkedIn
         </button>
         <footer id='cpy-txt' className="footer">
           <p>© Copyright Mayansh Bangali 2024</p>
           <p>Design by <strong>Mayansh Bangali</strong></p>
           <a href="#page1" className="scroll-up">
             <FaArrowUpLong />
            </a>
         </footer>
         
       </div>
    </div>
  );
};

export default Page5;
