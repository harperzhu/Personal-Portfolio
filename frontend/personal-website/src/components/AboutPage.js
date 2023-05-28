import React from "react";
import designIcon from "../assets/images/skillIcon/icon-design.svg";
import appIcon from "../assets/images/skillIcon/icon-app.svg";
import photoIcon from "../assets/images/skillIcon/icon-photo.svg";
import devIcon from "../assets/images/skillIcon/icon-dev.svg";

import NavBar from "./NavBar";

export default function AboutPage() {
  return (
    <div className="overall-container">
      <>
        <article class="about  active" data-page="about">
          <NavBar />
          <header>
            <h2 class="h2 article-title">About me</h2>
          </header>

          <section class="about-text">
            <p>
              I am a software engineer with 3 years of professional experience,
              working with Handshake and leading startups to build and deploy
              applications for production systems. Leveraging my skills in
              scalable application development, With expertise in building
              scalable systems and backend applications, leveraging
              technologies, and a deep passion for understanding user needs and
              spearheading end-to-end website initiatives, I am eager to explore
              both software engineering and product management to drive
              comprehensive solutions.
            </p>

            <p>
              Currently, I am pursuing my Master's degree in Information Science
              at Cornell Tech, where I am immersed in cutting-edge research and
              acquiring knowledge about the latest advancements in the field.
            </p>
          </section>

          {/* - service */}

          <section class="service">
            <h3 class="h3 service-title">What i'm doing</h3>

            <ul class="service-list">
              <li class="service-item">
                <div class="service-icon-box">
                  <img src={devIcon} alt="Web development icon" width="40" />
                </div>

                <div class="service-content-box">
                  <h4 class="h4 service-item-title">Web development</h4>

                  <p class="service-item-text">
                    High-quality development of sites at the professional level.
                  </p>
                </div>
              </li>

              <li class="service-item">
                <div class="service-icon-box">
                  <img src={designIcon} alt="design icon" width="40" />
                </div>

                <div class="service-content-box">
                  <h4 class="h4 service-item-title">Product Management</h4>

                  <p class="service-item-text">
                    Efficiently plan, develop, and launch innovative products
                    while ensuring alignment with market needs and business
                    goals.
                  </p>
                </div>
              </li>

              <li class="service-item">
                <div class="service-icon-box">
                  <img src={appIcon} alt="mobile app icon" width="40" />
                </div>

                <div class="service-content-box">
                  <h4 class="h4 service-item-title">Mobile apps</h4>

                  <p class="service-item-text">
                    Professional development of applications for iOS and
                    Android.
                  </p>
                </div>
              </li>

              <li class="service-item">
                <div class="service-icon-box">
                  <img src={photoIcon} alt="camera icon" width="40" />
                </div>

                <div class="service-content-box">
                  <h4 class="h4 service-item-title">Photography</h4>

                  <p class="service-item-text">
                    I make high-quality photos of any category at a professional
                    level.
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </article>
      </>
    </div>
  );
}
