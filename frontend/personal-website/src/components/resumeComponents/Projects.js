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
              <li className="resume">
                <p className="timeline-text">
                  <ul style={{ paddingLeft: "20px" }}>
                    <li style={{ listStyleType: "disc", marginBottom: "8px" }}>
                      Developed frontend for a web app using React and built
                      backend server and Express and deployed on Heroku
                    </li>
                    <li style={{ listStyleType: "disc", marginBottom: "8px" }}>
                      Built live chat server via WebSocket and implemented input
                      sanitization to prevent Cross-Site Scripting Attacks
                    </li>
                    <li style={{ listStyleType: "disc", marginBottom: "8px" }}>
                      Implemented secure user authentication and synchronized
                      data storage using Azure and MongoDB databases.
                    </li>
                  </ul>
                </p>
              </li>
            </ul>
          </li>

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
              <li className="resume">
                <p className="timeline-text">
                  <ul style={{ paddingLeft: "20px" }}>
                    <li style={{ listStyleType: "disc", marginBottom: "8px" }}>
                      Designed and developed a full-stack interactive college
                      map to provide navigation using Java and JavaScript
                    </li>
                    <li style={{ listStyleType: "disc", marginBottom: "8px" }}>
                      Developed a Spark Java server to provide RESTful API
                      endpoints for querying data from the React frontend
                      application.
                    </li>
                    <li style={{ listStyleType: "disc", marginBottom: "8px" }}>
                      Implemented Dijkstra's Algorithm to improve navigation
                      efficiency and enhance user experience.
                    </li>
                    <li style={{ listStyleType: "disc", marginBottom: "8px" }}>
                      Implemented test-suite including script test and Junit
                      test to achieve 97% code coverage to ensure reliability.
                    </li>
                  </ul>
                </p>
              </li>
            </ul>
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
              <li className="resume">
                <p className="timeline-text">
                  <ul style={{ paddingLeft: "20px" }}>
                    <li style={{ listStyleType: "disc", marginBottom: "8px" }}>
                      Acquired knowledge of software security vulnerabilities
                      and best practices through buffer overflow exploitation in
                      C
                    </li>
                    <li style={{ listStyleType: "disc", marginBottom: "8px" }}>
                      Enhanced software security by enabling ASLR to randomize
                      the memory location of system components to prevent
                      return-into-libc exploits from gaining root shell access
                    </li>
                  </ul>
                </p>
              </li>
            </ul>
          </li>
        </ol>
      </section>
    </div>
  );
}
