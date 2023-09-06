import React from "react";
import NavBar from "../NavBar/NavBar";
import Stars from "../Stars/Stars";
import "./Header.css";
import Gradient from "../../assets/gradient.png";
import { motion } from "framer-motion";

function Header({ open, setOpen }) {
  return (
    <>
      <NavBar setOpen={setOpen} />
      <Stars />
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.6,
          duration: 1,
          ease: [0.6, 0.05, 0.01, 0.9],
        }}
        className="header"
      >
        <div className="header-container">
          <img className="gradient-bg" src={Gradient} alt="" />
          <div className="header-content">
            <p className="intro">Hello, I am</p>
            <h2 className="heading">Shlok Mehta.</h2>
            <h2 className="heading">I build things for the Web.</h2>
            <p className="description">
              I’m a software engineer specializing in building Full-Stack
              Applications. Recently completed Post-Graduate certificate in Web
              Development from <span className="site">Conestoga College.</span>
            </p>
          </div>
        </div>
        <div className="btn-shadow-holder">
          <a className="btn" href="mailto:shlok_mehta@outlook.com">
            Get In Touch
          </a>
          <div className="shadow"></div>
        </div>
      </motion.div>
    </>
  );
}

export default Header;
