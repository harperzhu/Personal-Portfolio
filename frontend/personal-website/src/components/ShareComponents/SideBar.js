import React from "react";
import avatarImage from "../../assets/images/avatar/my-avatar.jpg";

export default function SideBar() {
  return (
    <>
      <aside className="sidebar" data-sidebar>
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img src={avatarImage} alt="Harper Zhu" width="80" />
          </figure>

          <div className="info-content">
            <h1 className="name" title="Harper Zhu">
              Harper Zhu
            </h1>

            <p className="title">Software Engineer</p>
          </div>

          <button className="info_more-btn" data-sidebar-btn>
            <span>Show Contacts</span>

            <ion-icon name="chevron-down"></ion-icon>
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>

                <a href="mailto:harperzhu99@gmail.com" className="contact-link">
                  harperzhu99@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="phone-portrait-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>

                <a href="tel:+1-206-697-8163" className="contact-link">
                  +1 (206) 697-8163
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Location</p>

                <address>
                  New York City, New York, US / Seattle, Washington, US{" "}
                </address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            {/* <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li> */}

            {/* <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li> */}

            {/* <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li> */}
          </ul>
        </div>
      </aside>
    </>
  );
}
