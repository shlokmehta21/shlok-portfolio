import React from "react";
import { ReactComponent as SMlogo } from "../../assets/SM.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import "./NavBar.css";
import Stars from "../Stars/Stars";
import { motion } from "framer-motion";

function NavBar({ setOpen }) {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          y: -70,
        }}
        animate={{
          duration: 1,
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: [0.6, 0.05, 0.01, 0.9],
        }}
        className="outer-header-container"
      >
        <div className="nav-container">
          <div className="nav-header-container">
            <SMlogo fill="white" height="250px" width="60px" stroke="white" />
            <ul className="nav-items">
              <li>
                <a href="#work">Work</a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/shlok-mehta-759347192/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/shlokmehta21"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
              <li className="resume">
                <a
                  href="https://drive.google.com/file/d/1SLUiccdzWma7USM3I5etildqQH5EcQ-r/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
            <MenuIcon
              className="menu"
              fill="white"
              height="150px"
              width="40px"
              stroke="white"
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
      </motion.div>
      <Stars />
    </>
  );
}

export default NavBar;
