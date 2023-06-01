import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/"); // assuming your main page is at '/'
  };

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>
        You're in the wrong place. But don't worry, we'll get you back on track.
      </p>
      <button onClick={goBack} className="error-button">
        Back to Main Page
      </button>
    </div>
  );
}
