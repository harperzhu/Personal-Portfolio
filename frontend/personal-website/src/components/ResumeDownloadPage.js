import React from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

export default function ResumeDownloadPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  //   const goToDownload = () => {
  //     <Link to={user.id}></Link>
  //   };

  return (
    <main>
      <SideBar />
      <div className="overall-container">
        <NavBar />
        <article className="about active" data-page="about">
          <div className="error-page">
            <h1 className="extra-small-heading">Resume Downloaded!</h1>
            <p className="extra-small-paragraph">
              Harper's resume has been successfully downloaded. If the download
              did not start in a few seconds, you can click the link below to
              download it.
            </p>
            <button
              //   onClick={goToDownload}
              className="error-button extra-small-button"
            >
              <a
                href="https://drive.google.com/uc?export=download&id=1afC3oW_-AohjKp9KrEqWayemyZ06hPYV"
                download
                className="resume-download-link"
              >
                Download Resume
              </a>
            </button>
            <button
              onClick={goBack}
              className="error-button extra-small-button"
            >
              Back to Main Page
            </button>
          </div>
        </article>
      </div>
    </main>
  );
}
