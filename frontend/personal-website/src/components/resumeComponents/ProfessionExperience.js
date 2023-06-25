import React from "react";

export default function ProfessionExperience() {
  return (
    <div>
      {" "}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3"> Professional Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Full Stack Engineer Intern,
              <br />
              HandShake
            </h4>

            <span>June 2023 – August 2023</span>

            <ul>
              <li className="resume">
                Establish a production-ready PACT broker service
                <ul>
                  <li
                    style={{
                      listStyleType: "disc",
                      marginLeft: "20px",
                      marginBottom: "8px",
                    }}
                  >
                    <p className="timeline-text">
                      Use Golang and Ruby on Rails to facilitate the migration
                      from monolithic to microservice architecture and increase
                      the scalability of the Handshake website
                    </p>
                  </li>
                  <li
                    style={{
                      listStyleType: "disc",
                      marginLeft: "20px",
                      marginBottom: "8px",
                    }}
                  >
                    <p className="timeline-text">
                      Implement contract testing and maintained contract files
                      in Google Cloud Platform and validation using the PACT
                      framework to ensure the performance of the job search
                      page, with a projected 98% of contracts validated without
                      error
                    </p>
                  </li>
                  <li
                    style={{
                      listStyleType: "disc",
                      marginLeft: "20px",
                      marginBottom: "8px",
                    }}
                  >
                    <p className="timeline-text">
                      Build the contract tests into CI/CD pipeline and develop
                      monitoring dashboards in Datadog for automated performance
                      tracking tool on contract verification, including service
                      contract verification frequency and failure instance
                      insights, streamlining bug identification
                    </p>
                  </li>
                </ul>
              </li>
              <li className="resume">
                Optimized Job Search service using Elastic Search
                <ul>
                  <li
                    style={{
                      listStyleType: "disc",
                      marginLeft: "20px",
                      marginBottom: "8px",
                    }}
                  >
                    <p className="timeline-text">
                      Implement location boosting in search results with
                      term-based boosts using Kibana and posgresSQL with
                      projected significant performance improvement and
                      cost-saving of $280k
                    </p>
                  </li>
                  <li
                    style={{
                      listStyleType: "disc",
                      marginLeft: "20px",
                      marginBottom: "8px",
                    }}
                  >
                    <p className="timeline-text">
                      Experiment with search improvement using A/B testing and
                      monitor search performance and user interaction using
                      Datadog and Bugsnag with an expected 30% latency
                      improvement and page loading time
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Software Engineer Intern,
              <br />
              CocoHealth
            </h4>

            <span>Sep 2020 – Mar 2022</span>

            <ul>
              <li className="resume">
                <ul style={{ paddingLeft: "20px" }}>
                  <li style={{ listStyleType: "disc", marginBottom: "8px" }}>
                    Developed a conversational chatbot connecting a potential
                    market of 40M caregivers and 1M doctors for telemedicine
                  </li>
                  <li style={{ listStyleType: "disc", marginBottom: "8px" }}>
                    Implemented chatbot on React-Native mobile app via PubNub
                    that enabled multi-platform access and increased available
                    user data for analytics
                  </li>
                  <li style={{ listStyleType: "disc", marginBottom: "8px" }}>
                    Optimized conversation flow by adding new intents based on
                    user feedback, resulting in a 21% increase in user
                    satisfaction.
                  </li>
                  <li style={{ listStyleType: "disc", marginBottom: "8px" }}>
                    Deployed the chatbot for beta testing through TestFlight and
                    Android beta program releases to allow for alpha testing
                  </li>
                  <li style={{ listStyleType: "disc", marginBottom: "8px" }}>
                    Streamlined inter-team communication and established clear
                    protocols for feedback, bug reporting, and issue resolution
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Data Science Researcher,
              <br />
              Department of Statistics, University of Washington
            </h4>

            <span>Sep 2020 – Dec 2020</span>

            <ul>
              <li className="resume">
                <ul style={{ paddingLeft: "20px" }}>
                  <li style={{ listStyleType: "disc", marginBottom: "8px" }}>
                    Built a COVID-19 data visualization web app to visualize the
                    spread of the pandemic on campus using R, Shiny to promote
                    mask-wearing behavior.
                  </li>
                  <li style={{ listStyleType: "disc", marginBottom: "8px" }}>
                    Simulated interpersonal interactions among 10,000+ students
                    living on campus using the network model to identify 5
                    potential disease hotspots and correct intervention
                    strategies
                  </li>
                  <li style={{ listStyleType: "disc", marginBottom: "8px" }}>
                    Customized models to include off-campus interactions to
                    simulate the transmission process based on the SIR model and
                    stability analysis that improved the accuracy of disease
                    modeling by 53%
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ol>
      </section>
    </div>
  );
}
