import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../ShareComponents/NavBar";
import cat_hat_off from "../../assets/images/messageReceivedImage/cat-hat-off.gif";

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
          <br></br>

          <img
            src={cat_hat_off}
            alt="cat taking hat off as a thank you gesture!"
            style={{ width: "300px", height: "300px" }}
          />
          <h1 style={{ fontSize: "1.5rem" }}>Thank You!</h1>
          <p style={{ fontSize: "1rem" }}>
            Your message has been received successfully.
          </p>
          <button
            onClick={goBack}
            className="error-button"
            style={{ fontSize: "0.9rem" }}
          >
            Back to Main Page
          </button>
        </div>
      </article>
    </div>
  );
}
