import React from "react";
import p1 from "../../assets/projects/p1.png";
import p2 from "../../assets/projects/p2.png";
import p3 from "../../assets/projects/p3.png";
import FootballStore from "../../assets/football.png";
import CMC from "../../assets/CMC.png";
import Vadict from "../../assets/vadict.png";
import "./Project.css";
import IconExternal from "../icons/External";
import IconGitHub from "../icons/Github";
import { motion } from "framer-motion";

const projectData = [
  {
    id: 1,
    cover: p1,
    icon: FootballStore,
    skills: [
      "React",
      "MUI",
      "SCSS",
      "Typescript",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
    ],
    github:
      "https://github.com/shlokmehta21?tab=repositories&q=football&type=&language=&sort=",
    link: "https://footballshoestore.netlify.app/",
    describtion:
      "Created Football Shoes Store using MERN stack which allows users to buy products online and admin to keep track of orders and manage products on the admin panel. Developed RESTful API using NodeJS and implemented the application's front end on ReactJS; managed global Application state using Redux. Deployed Front-End on netlify and Back-End on Railyway.io and used MongoDB atlas to store data.",
  },
  {
    id: 2,
    cover: p2,
    icon: CMC,
    skills: ["React", "Javascript", "MUI", "NodeJs", "ExpressJs"],
    github: "https://github.com/shlokmehta21/crypto-tracker",
    link: "https://shlokmehta-crypto-tracker.netlify.app/",
    describtion:
      "A web application that tracks various cryptocurrency prices and related information, users can make their crypto watchlist and view real-time charts and news. Fetched crypto data from Coingecko API and news data from News API using NodeJS. ",
  },
  {
    id: 3,
    cover: p3,
    icon: Vadict,
    skills: [
      "EJS",
      "Javascript",
      "Bootstrap",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
    ],
    github: "https://github.com/shlokmehta21/product_management_system",
    describtion:
      "This is a web platform for issuing hardware equipment (sensors) to customers. Users can track equipment, perform CRUD operations, and access reports. Admin can add new users to the system. It's user-friendly and essential for managing equipment and ensuring customer satisfaction.",
  },
];

export const Project = () => {
  return (
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
      id="work"
      className="project-container"
    >
      <div className="project-inner-container">
        <h2 className="project-title">My Projects</h2>
      </div>

      {projectData.map((project) => (
        <div key={project.id} className="project-cards-container">
          <div className="card-container">
            <div className="card-img">
              <img className="img" src={project.cover} alt="pimg" />
            </div>
            <div className="card-body">
              <img className="project-logo" src={project.icon} alt="Logo" />
              <p className="card-desc">{project.describtion}</p>
              <div className="tech-used">
                {project.skills.map((skill, index) => (
                  <p key={index}>{skill}</p>
                ))}
              </div>
              <div className="project-btns">
                {project.link ? (
                  <a
                    className="card-btn"
                    rel="noreferrer"
                    target="_blank"
                    href={project.link}
                  >
                    <IconExternal />
                  </a>
                ) : (
                  ""
                )}

                <a
                  className="card-btn"
                  rel="noreferrer"
                  target="_blank"
                  href={project.github}
                >
                  <IconGitHub />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};
