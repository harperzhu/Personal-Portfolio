import React from "react";

export default function Projects() {
  return (
    <div>
      {" "}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Personal Projects</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              {" "}
              Feed Me
              <br />
              <em className="introduction-line">
                {" "}
                Full stack interactive web application in funding raising for
                animal shelter
              </em>
            </h4>

            <span>Sep 2021 – Dec 2021</span>

            <ul>
              <p className="timeline-text">
                <li className="resume">
                  {" "}
                  - Developed frontend for a web app using React and built
                  backend server and Express and deployed on Heroku{" "}
                </li>
                <br />
                <li className="resume">
                  - Built live chat server via WebSocket and implemented input
                  sanitization to prevent Cross-Site Scripting Attacks{" "}
                </li>
                <br />
                <li className="resume">
                  - Implemented secure user authentication and synchronized data
                  storage using Azure and MongoDB databases.
                </li>
                <br />
              </p>
            </ul>
          </li>

          {/* <!-- campus map --> */}
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Campus Map
              <em className="introduction-line">
                {" "}
                Full Stack Pathfinding web application
              </em>
            </h4>

            <span>Jun 2020 – Aug 2020</span>

            <ul>
              <p className="timeline-text">
                <li className="resume">
                  {" "}
                  - Designed and developed a full-stack interactive college map
                  to provide navigation using Java and JavaScript{" "}
                </li>
                <br />
                <li className="resume">
                  -Developed a Spark Java server to provide RESTful API
                  endpoints for querying data from the React frontend
                  application.{" "}
                </li>
                <br />
                <li className="resume">
                  -Implemented Dijkstra's Algorithm to improve navigation
                  efficiency and enhance user experience.
                </li>
                <br />
                <li className="resume">
                  -Implemented test-suite including script test and Junit test
                  to achieve 97% code coverage to ensure reliability
                </li>

                <br />
              </p>
            </ul>

            {/* <!-- Stack Smashing Exploits --> */}
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Stack Smashing Exploits
              <em className="introduction-line">
                {" "}
                Investigate Cybersecurity Leaks{" "}
              </em>
            </h4>

            <span> Aug 2022 – Dec 2022</span>

            <ul>
              <p className="timeline-text">
                <li className="resume">
                  {" "}
                  - Acquired knowledge of software security vulnerabilities and
                  best practices through buffer overflow exploitation in C{" "}
                </li>
                <br />
                <li className="resume">
                  -Enhanced software security by enabling ASLR to randomize the
                  memory location of system components to prevent
                  return-into-libc exploits from gaining root shell access{" "}
                </li>
                <br />

                <br />
              </p>
            </ul>
          </li>
        </ol>
      </section>
    </div>
  );
}
