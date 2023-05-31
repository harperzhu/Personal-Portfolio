import React from "react";

export default function SkillBar() {
  return (
    <section className="skill animate-skill-bars">
      <h3 className="h3 skills-title">My skills</h3>

      <ul>
        <li className="skills-item">
          <div className="title-wrapper">
            <h5 className="h5">Python</h5>
            <data value="80">60%</data>
          </div>

          <div className="skill-progress-bg">
            <div className="skill-progress-fill" style={{ width: "60%" }}></div>
          </div>
        </li>

        <li className="skills-item">
          <div className="title-wrapper">
            <h5 className="h5">JavaScript</h5>
            <data value="70">60%</data>
          </div>

          <div className="skill-progress-bg">
            <div className="skill-progress-fill" style={{ width: "60%" }}></div>
          </div>
        </li>

        <li className="skills-item">
          <div className="title-wrapper">
            <h5 className="h5">Java</h5>
            <data value="90">50%</data>
          </div>

          <div className="skill-progress-bg">
            <div className="skill-progress-fill" style={{ width: "50%" }}></div>
          </div>
        </li>

        <li className="skills-item">
          <div className="title-wrapper">
            <h5 className="h5">R</h5>
            <data value="50">50%</data>
          </div>

          <div className="skill-progress-bg">
            <div className="skill-progress-fill" style={{ width: "50%" }}></div>
          </div>
        </li>
        <li className="skills-item">
          <div className="title-wrapper">
            <h5 className="h5">C</h5>
            <data value="70">30%</data>
          </div>

          <div className="skill-progress-bg">
            <div className="skill-progress-fill" style={{ width: "30%" }}></div>
          </div>
        </li>
      </ul>
    </section>
  );
}
