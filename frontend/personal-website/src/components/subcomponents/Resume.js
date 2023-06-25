import React from "react";
// import SideBar from "../SideBar";
import NavBar from "../ShareComponents/NavBar";
import { useNavigate } from "react-router-dom";
import SkillBar from "../resumeComponents/SkillBar";
import Framework from "../resumeComponents/Framework";
import Database from "../resumeComponents/Database";
import Education from "../resumeComponents/Education";
import ProfessionExperience from "../resumeComponents/ProfessionExperience";
import Projects from "../resumeComponents/Projects";
import Volunteer from "../resumeComponents/Volunteer";

export default function Resume() {
  const navigate = useNavigate();

  const downloadResume = () => {
    // Replace the URL with the actual file path of your resume
    const resumeUrl =
      "https://drive.google.com/uc?export=download&id=1MdB-TSI1SVleuLmagmjwkjHkKvkmjcXt";
    window.location.href = resumeUrl;
    navigate("/resume/download");
  };

  return (
    <>
      <div className="overall-container">
        <NavBar />

        <article className="about  active" data-page="about">
          <header>
            <h2 className="h2 article-title">Resume</h2>
          </header>
          <button className="resume-button form-btn" onClick={downloadResume}>
            Download Resume
            {/* <a
                
                download
                className="resume-download-link"
                style={{ fontSize: "1.2rem", color: "#FFDB70" }}
              > */}
          </button>
          <Education />
          <ProfessionExperience />
          <Projects />
          {/* <Volunteer /> */}
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
          </section>
        </article>
      </div>
    </>
  );
}
