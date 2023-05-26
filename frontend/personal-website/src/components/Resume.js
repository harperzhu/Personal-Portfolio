import React from "react";

export default function Resume() {
  return (
    <div>
      <header>
        <h2 class="h2 article-title">Resume</h2>
      </header>

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
              Core Courses: Applied Machine Learning, Security and Privacy In
              The Wild, Intro to Computer Vision, Building Startup System
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">University of Washington </h4>

            <span>09/2017 - 03/2022 </span>

            <p class="timeline-text">
              Bachelor of Art in Biochemistry, International Studies (Honors)
              <br />
              Teaching Assistant for Software Architecture
              <br />
              Core Courses: Algorithms and Computational Complexity, Software
              Architecture for Interactive Systems, Server-Side Development,
              Client-Side Development, Software Design and Implementation, Data
              Structures and Algorithms
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">
              High school of art and design
            </h4>

            <span>2002 — 2004</span>

            <p class="timeline-text">
              Duis aute irure dolor in reprehenderit in voluptate, quila
              voluptas mag odit aut fugit, sed consequuntur magni dolores eos.
            </p>
          </li>
        </ol>
      </section>

      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 class="h3">Experience</h3>
        </div>

        <ol class="timeline-list">
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
                  - Developed a conversational chatbot connecting a potential
                  market of 40M caregivers and 1M doctors for telemedicine{" "}
                </li>
                <br />
                <li class="resume">
                  - Implemented chatbot on React-Native mobile app via PubNub
                  that enabled multi-platform access and increased available
                  user data for analytics{" "}
                </li>
                <br />
                <li class="resume">
                  - Optimized conversation flow by adding new intents based on
                  user feedback, resulting in a 21% increase in user
                  satisfaction.
                </li>
                <br />
                <li class="resume">
                  {" "}
                  - Deployed the chatbot for beta testing through TestFlight and
                  Android beta program releases to allow for alpha testing
                </li>
                <br />
                <li class="resume">
                  {" "}
                  - Streamlined inter-team communication and established clear
                  protocols for feedback, bug reporting, and issue resolution
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

            <ul>
              <li class="resume">
                {" "}
                - Built a COVID-19 data visualization web app to visualize the
                spread of the pandemic on campus using R, Shiny to promote
                mask-wearing behavior.{" "}
              </li>
              <br />
              <li class="resume">
                -Simulated interpersonal interactions among 10,000+ students
                living on campus using the network model to identify 5 potential
                disease hotspots and correct intervention strategies{" "}
              </li>
              <br />
              <li class="resume">
                - Customized models to include off-campus interactions to
                simulate the transmission process based on the SIR model and
                stability analysis that improved the accuracy of disease
                modeling by 53%
              </li>
              <br />
            </ul>
          </li>
        </ol>
      </section>

      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 class="h3">Academic Projects</h3>
        </div>

        <ol class="timeline-list">
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">
              {" "}
              Feed Me
              <br />
              <em class="introduction-line">
                {" "}
                Full stack interactive web application in funding raising for
                animal shelter
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
                  - Built live chat server via WebSocket and implemented input
                  sanitization to prevent Cross-Site Scripting Attacks{" "}
                </li>
                <br />
                <li class="resume">
                  - Implemented secure user authentication and synchronized data
                  storage using Azure and MongoDB databases.
                </li>
                <br />
              </ul>
            </p>
          </li>

          {/* <!-- campus map --> */}
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Campus Map</h4>
            <em class="introduction-line">
              {" "}
              Full Stack Pathfinding web application{" "}
            </em>

            <span>Jun 2020 – Aug 2020</span>

            <ul>
              <li class="resume">
                {" "}
                - Designed and developed a full-stack interactive college map to
                provide navigation using Java and JavaScript{" "}
              </li>
              <br />
              <li class="resume">
                -Developed a Spark Java server to provide RESTful API endpoints
                for querying data from the React frontend application.{" "}
              </li>
              <br />
              <li class="resume">
                -Implemented Dijkstra's Algorithm to improve navigation
                efficiency and enhance user experience.
              </li>
              <br />
              <li class="resume">
                -Implemented test-suite including script test and Junit test to
                achieve 97% code coverage to ensure reliability
              </li>
              <br />
            </ul>

            {/* <!-- Stack Smashing Exploits --> */}
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Stack Smashing Exploits</h4>
            <em class="introduction-line"> Investigate Cybersecurity Leaks </em>

            <span> Aug 2022 – Dec 2022</span>

            <ul>
              <li class="resume">
                {" "}
                - Acquired knowledge of software security vulnerabilities and
                best practices through buffer overflow exploitation in C{" "}
              </li>
              <br />
              <li class="resume">
                -Enhanced software security by enabling ASLR to randomize the
                memory location of system components to prevent return-into-libc
                exploits from gaining root shell access{" "}
              </li>
              <br />

              <br />
            </ul>
          </li>
        </ol>
      </section>

      <section class="skill">
        <h3 class="h3 skills-title">My skills</h3>

        <ul class="skills-list content-card">
          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Python</h5>
              <data value="80">60%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "60%" }}></div>
            </div>
          </li>

          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">JavaScript</h5>
              <data value="70">60%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "60%" }}></div>
            </div>
          </li>

          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Java</h5>
              <data value="90">50%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "50%" }}></div>
            </div>
          </li>

          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">R</h5>
              <data value="50">50%</data>
            </div>

            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{ width: "50%" }}></div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
