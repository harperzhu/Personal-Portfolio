import React from "react";

export default function ProfessionExperience() {
  return (
    <div>
      {" "}
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
                  * Used Ruby on Rails, React, and GraphQL to build an engaging
                  student experience on web applications for 17 million 
                  students across the country. {" "}
                </li>
                <br />
                <li class="resume">
                  * Scaling out and refactoring existing systems code in a
                  service-oriented architecture.{" "}
                </li>
                <br />
                <li class="resume">
                  * Building college recruiting tools for companies ranging from
                  Fortune 500 to small businesses.
                </li>
                <br />
                <li class="resume">
                  {" "}
                  * Speccing, reviewing, developing, and deploying large-scale
                  web applications safely and reliably.
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
            <p class="timeline-text">
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
                  living on campus using the network model to identify 5
                  potential disease hotspots and correct intervention strategies{" "}
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
            </p>
          </li>
        </ol>
      </section>
    </div>
  );
}