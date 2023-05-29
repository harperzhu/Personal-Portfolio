import React from "react";
// import SideBar from "../SideBar";
import NavBar from "../NavBar";
import { useNavigate } from "react-router-dom";
import SkillBar from "../resumeComponents/SkillBar";
import Framework from "../resumeComponents/Framework";
import Database from "../resumeComponents/Database";
import Education from "../resumeComponents/Education";
import ProfessionExperience from "../resumeComponents/ProfessionExperience";
import Projects from "../resumeComponents/Projects";

export default function Resume() {
  const navigate = useNavigate();

  const downloadResume = () => {
    // Replace the URL with the actual file path of your resume
    const resumeUrl = "/resume/download";
    navigate(resumeUrl);
  };

  return (
    <>
      <div className="overall-container">
        <NavBar />
        <article className="about  active" data-page="about">
          <header>
            <h2 className="h2 article-title">Resume</h2>
          </header>
          <Education />
          <ProfessionExperience />
          <Projects />
          <div className="skills-list content-card">
            <SkillBar />
            <br></br>
            <br></br>
            <Framework />
            <br></br>
            <br></br>
            <Database />
          </div>
          {/* // <!-- RESUME DOWNLOAD --> */}
          <section className="resume-download">
            <br></br>
            <br></br>
            <button className="resume-button form-btn" onClick={downloadResume}>
              Download Resume
            </button>
          </section>
        </article>
      </div>
    </>
  );
}
