import React from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../ShareComponents/SideBar";
import NavBar from "../ShareComponents/NavBar";
import cat_high_five_gif from "../../assets/images/resumeDownloadImage/cat-high-five.gif";

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
            <img
              src={cat_high_five_gif}
              alt="cat high fiving your resume download!"
              style={{ width: "360px", height: "300px" }}
            />
            <h1 className="extra-small-heading" style={{ fontSize: "1.5rem" }}>
              Success!
            </h1>
            <p className="extra-small-paragraph" style={{ fontSize: "1.3rem" }}>
              Harper's resume has been successfully downloaded. If the download
              do not start in a few seconds, you can click the link below to
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
                style={{ fontSize: "1.2rem", color: "#FFDB70" }}
              >
                Download Resume
              </a>
            </button>
            <br></br>
            <button
              onClick={goBack}
              className="error-button extra-small-button"
              style={{ fontSize: "1.2rem" }}
            >
              Back to Main Page
            </button>
          </div>
        </article>
      </div>
    </main>
  );
}
