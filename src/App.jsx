import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./App.css";
import Card from "./assets/Components/ProjectCard";
import Footer from "./assets/Components/Footer";

function App() {
  const typedElementRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["FULLSTACK DEVELOPER.", "UI/UX DESIGNER.", "GRAPHIC DESIGNER."],
      typeSpeed: 70,
      loop: true,
    };
    const typed = new Typed(typedElementRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <nav>
        <div className="one">
          <div className="logo">
            <img src="src/assets/images/logo.jpg" alt="" />
          </div>

          <div className="list">
            <ul>
              <li>ABOUT</li>
              <li>SKILL</li>
              <li>SERVICE</li>
              <li>PROJECT</li>
              <li>CONTACT ME</li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="about">
        <div className="text">
          <h1 className="green">HI,</h1>

          <h1>
            I AM ANIKET SHARMA <br /> <br />
          </h1>

          <br />
          <h1>
            <span className="typed-green" ref={typedElementRef}></span>
          </h1>

          <button className="resume-button">
            <p>Rusume</p>
            <div className="arrow-icon">
              <img src="./src/assets/icons/right-arrow.png" alt="" />
            </div>
          </button>
        </div>

        <div className="pic">
          <img src="src/assets/images/myself.jpg" alt="" />
        </div>
      </div>

      <div className="services-container">
        <div className="services">
          <div className="services-heading">
            <div className="main-heading">
              <p>WHAT I DO</p>
              <h1>
                SERVICES AND <span className="green-sol">SOLUTIONS</span>
              </h1>
            </div>

            <div className="one-liner">
              <div className="vertical-line"></div>
              <p>
                I deliver solutions to help businesses grow, with expertise in
                full-stack development.
              </p>
            </div>
          </div>

          <div className="container">
            <div className="box">
              <span></span>
              <div className="content">
                <h2>UI/UX DESIGNER</h2>
                <p>
                  I design user-friendly interfaces that are easy to navigate,
                  making sure every user has a great experience.
                </p>
              </div>
            </div>
            <div className="box">
              <span></span>
              <div className="content">
                <h2>FULLSTACK DEVELOPER</h2>
                <p>
                  I build both the front-end and back-end of web applications,
                  creating smooth and responsive user experiences.
                </p>
              </div>
            </div>
            <div className="box">
              <span></span>
              <div className="content">
                <h2>GRAPHIC DESIGNER</h2>
                <p>
                  I create eye-catching graphics for branding and digital
                  content, helping businesses tell their stories visually.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="skills-container">
        <div className="skills">
          <div className="skills-heading">
            <img src="src/assets/images/skills.png" alt="" />
            <h1>
              SKILL-<span className="green-set">SET</span>
            </h1>
          </div>
          <div className="skills-img">
            <img src="src/assets/skills/c-.png" alt="" />
            <img src="src/assets/skills/css-3.png" alt="" />
            <img src="src/assets/skills/express.png" alt="" />
            <img src="src/assets/skills/html-5.png" alt="" />
            <img src="src/assets/skills/java-script.png" alt="" />
            <img src="src/assets/skills/nextjs.jpg" alt="" />
            <img src="src/assets/skills/nodejs.png" alt="" />
            <img src="src/assets/skills/mongodb.png" alt="" />
            <img src="src/assets/skills/python.png" alt="" />
            <img src="src/assets/skills/sql-server.png" alt="" />
          </div>
        </div>
      </div>

      <div className="projects-container">
        <div className="projects">
          <div className="projects-heading">
            <div className="main-heading">
              <p>WORKING PROCESS</p>
              <h1>
                LATES WORKING <span className="green-sol">PROJECTS</span>
              </h1>
            </div>

            <div className="one-liner">
              <div className="vertical-line"></div>
              <p>
                Building robust, scalable applications that solve real-world
                challenges.
              </p>
            </div>
          </div>
        </div>
        <div className="cards">
          <Card
            heading1={"Trendy "}
            heading2={"Threads"}
            desc={
              "Developed a secure, full-featured e-commerce platform for a clothing brand, integrating user authentication, secure payment processing, and a responsive design to enhance user experience and accessibility."
            }
            cardName={"card1"}
          />
          <a
            href="https://github.com/aniket190705/todo-list"
            style={{ textDecoration: "none" }}
          >
            <Card
              heading1={"To-do "}
              heading2={"App"}
              desc={
                " This app allows users to create, manage, and track their tasks efficiently with features like adding, editing, and deleting tasks."
              }
              cardName={"card2"}
            />
          </a>
          <a
            href="https://github.com/aniket190705/Sortify"
            style={{ textDecoration: "none" }}
          >
            <Card
              heading1={"Sortify"}
              desc={
                "A Node.js application designed to organize and sort files based on their extensions. This app scans a specified directory and automatically categorizes files into separate folders according to their type (e.g., images, documents, videos)."
              }
              cardName={"card3"}
              color={"white"}
            />
          </a>
        </div>
      </div>
      <div className="footer-container">
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
