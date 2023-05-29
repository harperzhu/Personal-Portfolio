import React from "react";

export default function Education() {
  return (
    <div>
      {" "}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Cornell University</h4>

            <span>08/2022 — 06/2024 </span>

            <p className="timeline-text">
              Dual M.S in Information Systems & Applied Information Science
              <br />
              Core Courses: Applied Machine Learning, Security and Privacy In
              The Wild, Intro to Computer Vision, Building Startup System
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              University of Washington{" "}
            </h4>

            <span>09/2017 - 03/2022 </span>

            <p className="timeline-text">
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
        </ol>
      </section>
    </div>
  );
}
