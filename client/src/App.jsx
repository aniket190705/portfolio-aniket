import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./App.css";
import Card from "./assets/Components/ProjectCard";
import Footer from "./assets/Components/Footer";
import skill1 from "./assets/skills/c-.png";
import skill2 from "./assets/skills/css-3.png";
import skill3 from "./assets/skills/express.png";
import skill4 from "./assets/skills/html-5.png";
import skill5 from "./assets/skills/java-script.png";
import skill6 from "./assets/skills/mongodb.png";
import skill7 from "./assets/skills/nextjs.jpg";
import skill8 from "./assets/skills/nodejs.png";
import skill9 from "./assets/skills/python.png";
import skill10 from "./assets/skills/sql-server.png";
import logo from "./assets/images/logo3.png";
import resumeimg from "./assets/icons/right-arrow.png";
import skillheading from "./assets/images/skills.png";
import myimg from "./assets/images/myself.jpg";
import more from "./assets/images/stack.png";
import resume from "./assets/images/Aniket_Resume.pdf";

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

  const [menuActive, setMenuActive] = React.useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <nav>
        <div className="hamburger" onClick={toggleMenu}>
          <img src={more} alt="" width={"80px"} />
          <img src={logo} alt="" width={"80px"} />
        </div>
        <div className={`one ${menuActive ? "displayOne" : "noneOne"} `}>
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className={`list ${menuActive ? "active" : ""}`}>
            <ul>
              <a href="#about">
                <li>ABOUT</li>
              </a>
              <a href="#services">
                <li>SERVICE</li>
              </a>
              <a href="#skills">
                <li>SKILL</li>
              </a>
              <a href="#projects">
                <li>PROJECT</li>
              </a>
              <a href="#contact">
                <li>CONTACT ME</li>
              </a>
            </ul>
          </div>
        </div>
      </nav>

      <div className="about" id="about">
        <div className="text">
          <h1 className="green">HI,</h1>

          <h1>
            I AM ANIKET SHARMA <br /> <br />
          </h1>

          <br />
          <h1 className="typed-green">
            <span className="typed-green" ref={typedElementRef}></span>
          </h1>

          <a href={resume} target="_blank">
            <button className="resume-button">
              <p>Resume</p>
              <div className="arrow-icon">
                <img src={resumeimg} alt="" />
              </div>
            </button>
          </a>
        </div>

        <div className="pic">
          <img src={myimg} alt="" />
        </div>
      </div>

      <div className="services-container" id="services">
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

      <div className="skills-container" id="skills">
        <div className="skills">
          <div className="skills-heading">
            <img src={skillheading} alt="" />
            <h1>
              SKILL-<span className="green-set">SET</span>
            </h1>
          </div>
          <div className="skills-img">
            <img src={skill1} alt="" />
            <img src={skill2} alt="" />
            <img src={skill3} alt="" />
            <img src={skill4} alt="" />
            <img src={skill5} alt="" />
            <img src={skill6} alt="" />
            <img src={skill7} alt="" />
            <img src={skill8} alt="" />
            <img src={skill9} alt="" />
            <img src={skill10} alt="" />
          </div>
        </div>
      </div>

      <div className="projects-container" id="projects">
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
          {/* <Card
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
          </a> */}

          <Card
            heading1={"InsightsXFactor "}
            heading2={"Chatbot"}
            desc={
              "Developed a chatbot, for analyzing social media engagement by leveraging social media post data."
            }
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
            link={"https://github.com/aniket190705/InsightsXFactor"}
          ></Card>
          <Card
            heading1={"Trendy "}
            heading2={"Threads"}
            desc={
              "Developed a secure, full-featured e-commerce platform for a clothing brand, integrating user authentication, secure payment processing, and a responsive design."
            }
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
            link={""}
          ></Card>
          <Card
            heading1={"To-do "}
            heading2={"App"}
            desc={
              "This app allows users to create, manage, and track their tasks efficiently with features like adding, editing, and deleting tasks."
            }
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
            link={"https://github.com/aniket190705/todo-list"}
          ></Card>
        </div>
      </div>
      <div className="footer-container" id="contact">
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
