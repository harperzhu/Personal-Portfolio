import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";

export default function MessageReceived() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="overall-container">
      <NavBar />
      <article className="about active" data-page="about">
        <div className="error-page">
          <h1>Thank You!</h1>
          <p>
            Your message has been received successfully. We appreciate your
            feedback!
          </p>
          <button onClick={goBack} className="error-button">
            Back to Main Page
          </button>
        </div>
      </article>
    </div>
  );
}
