import "./App.css";
import { motion } from "framer-motion";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import { Project } from "./components/ProjectSection/Project";
import TopDrawer from "./components/Drawer/Drawer";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  const lineVariants = {
    hidden: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: "100vh",
      transition: { duration: 1.5 },
    },
  };

  return (
    <div className="App" style={{ background: "#12071f", height: "auto" }}>
      <TopDrawer open={open} setOpen={setOpen} />

      <Header setOpen={setOpen} />
      <div className="pageContainer">
        <Skills />
        <Project />
        <p className="footer">Shlok Mehta @2023</p>
      </div>

      <motion.div
        variants={lineVariants}
        initial="hidden"
        animate="visible"
        className="line-overlay"
      >
        <div className="outer-container">
          <div className="container">
            <div className="overlay-container">
              <div className="lines"></div>
              <div className="lines"></div>
              <div className="lines"></div>
              <div className="lines"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
