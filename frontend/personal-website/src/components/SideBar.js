import React from "react";

export default function SideBar() {
  return (
    <>
      <aside class="sidebar" data-sidebar>
        <div class="sidebar-info">
          <figure class="avatar-box">
            <img
              src="./assets/images/my-avatar.png"
              alt="Harper Zhu"
              width="80"
            />
          </figure>

          <div class="info-content">
            <h1 class="name" title="Richard hanrick">
              Harper Zhu
            </h1>

            <p class="title">Software Engineer</p>
          </div>

          <button class="info_more-btn" data-sidebar-btn>
            <span>Show Contacts</span>

            <ion-icon name="chevron-down"></ion-icon>
          </button>
        </div>

        <div class="sidebar-info_more">
          <div class="separator"></div>

          <ul class="contacts-list">
            <li class="contact-item">
              <div class="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>

              <div class="contact-info">
                <p class="contact-title">Email</p>

                <a href="mailto:harperzhu@yahoo.com" class="contact-link">
                  harperzhu@yahoo.com
                </a>
              </div>
            </li>

            <li class="contact-item">
              <div class="icon-box">
                <ion-icon name="phone-portrait-outline"></ion-icon>
              </div>

              <div class="contact-info">
                <p class="contact-title">Phone</p>

                <a href="tel:+1-206-697-8163" class="contact-link">
                  +1 (206) 697-8163
                </a>
              </div>
            </li>

            <li class="contact-item">
              <div class="icon-box">
                <ion-icon name="calendar-outline"></ion-icon>
              </div>

              <div class="contact-info">
                <p class="contact-title">Birthday</p>

                <time datetime="1982-06-23">June 23, 1982</time>
              </div>
            </li>

            <li class="contact-item">
              <div class="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div class="contact-info">
                <p class="contact-title">Location</p>

                <address>
                  New York City, New York, US / Seattle, Washington, US{" "}
                </address>
              </div>
            </li>
          </ul>

          <div class="separator"></div>

          <ul class="social-list">
            <li class="social-item">
              <a href="#" class="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li class="social-item">
              <a href="#" class="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li class="social-item">
              <a href="#" class="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
