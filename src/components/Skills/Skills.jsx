import React, { useState } from "react";
import "./Skills.css";
import Gradient from "../../assets/gradient.png";
import ChipComponent from "../Chip/Chip";
import JS from "../../assets/js.png";
import TS from "../../assets/typescript.png";
import java from "../../assets/java.png";
import htm from "../../assets/html.png";
import css from "../../assets/css-3.png";
import node from "../../assets/node-js.png";
import react from "../../assets/react.png";
import redux from "../../assets/redux.png";
import express from "../../assets/express.png";
import mongoose from "../../assets/mongoose.png";
import mongo from "../../assets/mongo.png";
import mysql from "../../assets/mysql.png";
import sql from "../../assets/sql.png";
import gql from "../../assets/gql.png";
import sass from "../../assets/sass.png";
import mui from "../../assets/mui.png";
import fmotion from "../../assets/motion.png";
import figma from "../../assets/figma.png";
import { motion } from "framer-motion";

const tech = [
  {
    name: "Javascript",
    img: JS,
  },
  {
    name: "Typescript",
    img: TS,
  },
  {
    name: "Java",
    img: java,
  },
  {
    name: "SQL",
    img: sql,
  },
  {
    name: "ReactJs",
    img: react,
  },
  {
    name: "Redux",
    img: redux,
  },
  {
    name: "NodeJs",
    img: node,
  },
  {
    name: "ExpressJs",
    img: express,
  },
  {
    name: "GrapghQL",
    img: gql,
  },
  {
    name: "Mongoose",
    img: mongoose,
  },
  {
    name: "MongoDB",
    img: mongo,
  },
  {
    name: "MySQL",
    img: mysql,
  },
  {
    name: "HTML",
    img: htm,
  },
  {
    name: "CSS",
    img: css,
  },
  {
    name: "SASS",
    img: sass,
  },
  {
    name: "MUI",
    img: mui,
  },
  {
    name: "Framer Motion",
    img: fmotion,
  },
  {
    name: "Figma",
    img: figma,
  },
];

function Skills() {
  const [Chips, setChips] = useState(tech);
  return (
    <motion.section
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
      className="skill-section-container"
    >
      <div className="inner-container">
        <div className="title">
          <div className="title-container">
            <img className="gradient-bg-title" src={Gradient} alt="" />
            <div className="title-content">
              <h2 className="title-text">My Skills</h2>
              <p className="title-desc">
                I specialize in building scalable and maintainable applications
                using these technologies, focusing on creating visually
                appealing and intuitive user interfaces. Additionally, I have
                experience working with databases, version control tools, and
                collaborating with teams.
              </p>
            </div>
          </div>
        </div>

        <div className="skill-container">
          <div className="chip-container">
            {Chips.map((techitem, index) => (
              <ChipComponent key={index} tech={techitem} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
