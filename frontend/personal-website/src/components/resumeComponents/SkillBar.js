import React from "react";

export default function SkillBar() {
  return (
    <section class="skill">
      <h3 class="h3 skills-title">My skills</h3>

      <ul>
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
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">C</h5>
            <data value="70">30%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style={{ width: "30%" }}></div>
          </div>
        </li>
      </ul>
    </section>
  );
}
