import React from "react";
// import SideBar from "../SideBar";
import NavBar from "../NavBar";
import { useNavigate } from "react-router-dom";
import reactIcon from "../../assets/images/frameworkImage/react-icon.svg";
import dockerIcon from "../../assets/images/frameworkImage/docker-icon.svg";
import restAPIIcon from "../../assets/images/frameworkImage/rest-api-icon.svg";
import figmaIcon from "../../assets/images/frameworkImage/figma-icon.svg";
import mongoDBIcon from "../../assets/images/databaseImage/mongodb-icon.svg";
import postgresqlIcon from "../../assets/images/databaseImage/postgresql-icon.svg";
import boobstrapIcon from "../../assets/images/frameworkImage/bootstrap-icon.svg";
import azureIcon from "../../assets/images/frameworkImage/azure-icon.svg";
import awsIcon from "../../assets/images/frameworkImage/aws-icon.svg";
import mySqlIcon from "../../assets/images/databaseImage/mysql-icon.svg";
import JqUERYIcon from "../../assets/images/frameworkImage/jquery-icon.svg";
import rubyOnRailsIcon from "../../assets/images/frameworkImage/ruby-on-rails-icon.svg";
import swiftUIIcon from "../../assets/images/frameworkImage/swiftui-icon.svg";

export default function Resume() {
  const navigate = useNavigate();

  const downloadResume = () => {
    // Replace the URL with the actual file path of your resume
    const resumeUrl = "/resume/download";
    navigate(resumeUrl);
  };

  return (
    <>
      <div className="overall-container">
        <NavBar />
        <article class="about  active" data-page="about">
          <header>
            <h2 class="h2 article-title">Resume</h2>
          </header>
          {/* EDUCATION */}
          <section class="timeline">
            <div class="title-wrapper">
              <div class="icon-box">
                <ion-icon name="book-outline"></ion-icon>
              </div>

              <h3 class="h3">Education</h3>
            </div>

            <ol class="timeline-list">
              <li class="timeline-item">
                <h4 class="h4 timeline-item-title">Cornell University</h4>

                <span>08/2022 — 06/2024 </span>

                <p class="timeline-text">
                  Dual M.S in Information Systems & Applied Information Science
                  <br />
                  Core Courses: Applied Machine Learning, Security and Privacy
                  In The Wild, Intro to Computer Vision, Building Startup System
                </p>
              </li>

              <li class="timeline-item">
                <h4 class="h4 timeline-item-title">
                  University of Washington{" "}
                </h4>

                <span>09/2017 - 03/2022 </span>

                <p class="timeline-text">
                  Bachelor of Art in Biochemistry, International Studies
                  (Honors)
                  <br />
                  Teaching Assistant for Software Architecture
                  <br />
                  Core Courses: Algorithms and Computational Complexity,
                  Software Architecture for Interactive Systems, Server-Side
                  Development, Client-Side Development, Software Design and
                  Implementation, Data Structures and Algorithms
                </p>
              </li>
            </ol>
          </section>
          {/* PROFESSIONAL EXPERIENCE  */}
          <section class="timeline">
            <div class="title-wrapper">
              <div class="icon-box">
                <ion-icon name="book-outline"></ion-icon>
              </div>

              <h3 class="h3"> Professional Experience</h3>
            </div>

            <ol class="timeline-list">
              <li class="timeline-item">
                <h4 class="h4 timeline-item-title">
                  Full Stack Engineer Intern,
                  <br />
                  HandShake
                </h4>

                <span>June 2023 – August 2023</span>

                <p class="timeline-text">
                  <ul>
                    <li class="resume">
                      {" "}
                      * Used Ruby on Rails, React, and GraphQL to build an
                      engaging student experience on web applications for 17
                      million  students across the country. {" "}
                    </li>
                    <br />
                    <li class="resume">
                      * Scaling out and refactoring existing systems code in a
                      service-oriented architecture.{" "}
                    </li>
                    <br />
                    <li class="resume">
                      * Building college recruiting tools for companies ranging
                      from Fortune 500 to small businesses.
                    </li>
                    <br />
                    <li class="resume">
                      {" "}
                      * Speccing, reviewing, developing, and deploying
                      large-scale web applications safely and reliably.
                    </li>
                    <br />
                  </ul>
                </p>
              </li>

              <li class="timeline-item">
                <h4 class="h4 timeline-item-title">
                  Software Engineer Intern,
                  <br />
                  CocoHealth
                </h4>

                <span>Sep 2020 – Mar 2022</span>

                <p class="timeline-text">
                  <ul>
                    <li class="resume">
                      {" "}
                      - Developed a conversational chatbot connecting a
                      potential market of 40M caregivers and 1M doctors for
                      telemedicine{" "}
                    </li>
                    <br />
                    <li class="resume">
                      - Implemented chatbot on React-Native mobile app via
                      PubNub that enabled multi-platform access and increased
                      available user data for analytics{" "}
                    </li>
                    <br />
                    <li class="resume">
                      - Optimized conversation flow by adding new intents based
                      on user feedback, resulting in a 21% increase in user
                      satisfaction.
                    </li>
                    <br />
                    <li class="resume">
                      {" "}
                      - Deployed the chatbot for beta testing through TestFlight
                      and Android beta program releases to allow for alpha
                      testing
                    </li>
                    <br />
                    <li class="resume">
                      {" "}
                      - Streamlined inter-team communication and established
                      clear protocols for feedback, bug reporting, and issue
                      resolution
                    </li>
                  </ul>
                </p>
              </li>

              <li class="timeline-item">
                <h4 class="h4 timeline-item-title">
                  Data Science Researcher,
                  <br />
                  Department of Statistics, University of Washington
                </h4>

                <span>Sep 2020 – Dec 2020</span>
                <p class="timeline-text">
                  <ul>
                    <li class="resume">
                      {" "}
                      - Built a COVID-19 data visualization web app to visualize
                      the spread of the pandemic on campus using R, Shiny to
                      promote mask-wearing behavior.{" "}
                    </li>
                    <br />
                    <li class="resume">
                      -Simulated interpersonal interactions among 10,000+
                      students living on campus using the network model to
                      identify 5 potential disease hotspots and correct
                      intervention strategies{" "}
                    </li>
                    <br />
                    <li class="resume">
                      - Customized models to include off-campus interactions to
                      simulate the transmission process based on the SIR model
                      and stability analysis that improved the accuracy of
                      disease modeling by 53%
                    </li>
                    <br />
                  </ul>
                </p>
              </li>
            </ol>
          </section>
          {/* PERSONAL PROJECT  */}
          <section class="timeline">
            <div class="title-wrapper">
              <div class="icon-box">
                <ion-icon name="book-outline"></ion-icon>
              </div>

              <h3 class="h3">Personal Projects</h3>
            </div>

            <ol class="timeline-list">
              <li class="timeline-item">
                <h4 class="h4 timeline-item-title">
                  {" "}
                  Feed Me
                  <br />
                  <em class="introduction-line">
                    {" "}
                    Full stack interactive web application in funding raising
                    for animal shelter
                  </em>
                </h4>

                <span>Sep 2021 – Dec 2021</span>

                <p class="timeline-text">
                  <ul>
                    <li class="resume">
                      {" "}
                      - Developed frontend for a web app using React and built
                      backend server and Express and deployed on Heroku{" "}
                    </li>
                    <br />
                    <li class="resume">
                      - Built live chat server via WebSocket and implemented
                      input sanitization to prevent Cross-Site Scripting Attacks{" "}
                    </li>
                    <br />
                    <li class="resume">
                      - Implemented secure user authentication and synchronized
                      data storage using Azure and MongoDB databases.
                    </li>
                    <br />
                  </ul>
                </p>
              </li>

              {/* <!-- campus map --> */}
              <li class="timeline-item">
                <h4 class="h4 timeline-item-title">
                  Campus Map
                  <em class="introduction-line">
                    {" "}
                    Full Stack Pathfinding web application
                  </em>
                </h4>

                <span>Jun 2020 – Aug 2020</span>

                <p class="timeline-text">
                  <ul>
                    <li class="resume">
                      {" "}
                      - Designed and developed a full-stack interactive college
                      map to provide navigation using Java and JavaScript{" "}
                    </li>
                    <br />
                    <li class="resume">
                      -Developed a Spark Java server to provide RESTful API
                      endpoints for querying data from the React frontend
                      application.{" "}
                    </li>
                    <br />
                    <li class="resume">
                      -Implemented Dijkstra's Algorithm to improve navigation
                      efficiency and enhance user experience.
                    </li>
                    <br />
                    <li class="resume">
                      -Implemented test-suite including script test and Junit
                      test to achieve 97% code coverage to ensure reliability
                    </li>

                    <br />
                  </ul>
                </p>
                {/* <!-- Stack Smashing Exploits --> */}
              </li>

              <li class="timeline-item">
                <h4 class="h4 timeline-item-title">
                  Stack Smashing Exploits
                  <em class="introduction-line">
                    {" "}
                    Investigate Cybersecurity Leaks{" "}
                  </em>
                </h4>

                <span> Aug 2022 – Dec 2022</span>

                <p class="timeline-text">
                  <ul>
                    <li class="resume">
                      {" "}
                      - Acquired knowledge of software security vulnerabilities
                      and best practices through buffer overflow exploitation in
                      C{" "}
                    </li>
                    <br />
                    <li class="resume">
                      -Enhanced software security by enabling ASLR to randomize
                      the memory location of system components to prevent
                      return-into-libc exploits from gaining root shell access{" "}
                    </li>
                    <br />

                    <br />
                  </ul>
                </p>
              </li>
            </ol>
          </section>
          {/* SKILL BAR  */}
          <section class="skill">
            <h3 class="h3 skills-title">My skills</h3>

            <ul class="skills-list content-card">
              <li class="skills-item">
                <div class="title-wrapper">
                  <h5 class="h5">Python</h5>
                  <data value="80">60%</data>
                </div>

                <div class="skill-progress-bg">
                  <div
                    class="skill-progress-fill"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </li>

              <li class="skills-item">
                <div class="title-wrapper">
                  <h5 class="h5">JavaScript</h5>
                  <data value="70">60%</data>
                </div>

                <div class="skill-progress-bg">
                  <div
                    class="skill-progress-fill"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </li>

              <li class="skills-item">
                <div class="title-wrapper">
                  <h5 class="h5">Java</h5>
                  <data value="90">50%</data>
                </div>

                <div class="skill-progress-bg">
                  <div
                    class="skill-progress-fill"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </li>

              <li class="skills-item">
                <div class="title-wrapper">
                  <h5 class="h5">R</h5>
                  <data value="50">50%</data>
                </div>

                <div class="skill-progress-bg">
                  <div
                    class="skill-progress-fill"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </li>
              <li class="skills-item">
                <div class="title-wrapper">
                  <h5 class="h5">C</h5>
                  <data value="70">30%</data>
                </div>

                <div class="skill-progress-bg">
                  <div
                    class="skill-progress-fill"
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </li>
            </ul>
          </section>
          <section class="skill">
            <h3 class="h3 skills-title">Framework </h3>
            <img
              src={reactIcon}
              alt="react"
              style={{ width: "62px", height: "62px", display: "inline-block" }}
            />
            <img
              src={dockerIcon}
              alt="docker"
              style={{
                width: "62px",
                height: "62px",
                filter: "invert(100%)",
                display: "inline-block",
              }}
            />
            <img
              src={restAPIIcon}
              alt="restAPI"
              style={{
                width: "62px",
                height: "62px",
                filter: "invert(100%)",
                display: "inline-block",
              }}
            />
            <img
              src={figmaIcon}
              alt="figma"
              style={{
                width: "62px",
                height: "62px",
                filter: "invert(100%)",
                display: "inline-block",
              }}
            />
            <img
              src={azureIcon}
              alt="azure"
              style={{
                width: "62px",
                height: "62px",
                filter: "invert(100%)",
                display: "inline-block",
              }}
            />
            <img
              src={boobstrapIcon}
              alt="azure"
              style={{
                width: "62px",
                height: "62px",
                filter: "invert(100%)",
                display: "inline-block",
              }}
            />
            <img
              src={awsIcon}
              alt="AWS"
              style={{
                width: "62px",
                height: "62px",
                filter: "invert(100%)",
                display: "inline-block",
              }}
            />
            <img
              src={swiftUIIcon}
              alt="AWS"
              style={{
                width: "62px",
                height: "62px",
                filter: "invert(100%)",
                display: "inline-block",
              }}
            />
            <img
              src={rubyOnRailsIcon}
              alt="AWS"
              style={{
                width: "62px",
                height: "62px",
                filter: "invert(100%)",
                display: "inline-block",
              }}
            />
            <img
              src={JqUERYIcon}
              alt="AWS"
              style={{
                width: "62px",
                height: "62px",
                filter: "invert(100%)",
                display: "inline-block",
              }}
            />
          </section>
          {/* database */}
          <section class="skill">
            <h3 class="h3 skills-title">Database </h3>
            <img
              src={mongoDBIcon}
              alt="mongoDB"
              style={{
                width: "62px",
                height: "62px",
                display: "inline-block",
                // backgroundColor: "white",
              }}
            />
            <img
              src={postgresqlIcon}
              alt="postgresql"
              style={{
                width: "62px",
                height: "62px",
                display: "inline-block",
              }}
            />
            <img
              src={mySqlIcon}
              alt="mySQL"
              style={{
                width: "62px",
                height: "62px",
                display: "inline-block",
              }}
            />
          </section>
          {/* // <!-- RESUME DOWNLOAD --> */}
          <section className="resume-download">
            <br></br>
            <br></br>
            <button className="resume-button form-btn" onClick={downloadResume}>
              Download Resume
            </button>
          </section>
        </article>
      </div>
    </>
  );
}
