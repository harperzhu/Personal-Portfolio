import React from "react";
import designIcon from "../assets/images/icon-design.svg";
import appIcon from "../assets/images/icon-app.svg";
import photoIcon from "../assets/images/icon-photo.svg";
import devIcon from "../assets/images/icon-dev.svg";

export default function AboutPage() {
  return (
    <div>
      <>
        <article class="about  active" data-page="about">
          <header>
            <h2 class="h2 article-title">About me</h2>
          </header>

          <section class="about-text">
            <p>
              I'm a professional Software Engineer and developer with 1 years of
              experience in creating websites and developing application
            </p>

            <p>
              Currently, I am completing my Master's degree in Information
              Science at Cornell Tech.
            </p>
          </section>

          {/* - service */}

          <section class="service">
            <h3 class="h3 service-title">What i'm doing</h3>

            <ul class="service-list">
              <li class="service-item">
                <div class="service-icon-box">
                  <img src={designIcon} alt="design icon" width="40" />
                </div>

                <div class="service-content-box">
                  <h4 class="h4 service-item-title">Web design</h4>

                  <p class="service-item-text">
                    The most modern and high-quality design made at a
                    professional level.
                  </p>
                </div>
              </li>

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
