// import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
// import React, { useState } from "react";
import "./App.css";
import HomePage from "./components/PageComponents/HomePage";
// import Blog from "./components/Blog";
// import Portfolio from "./components/Portfolio";
import ResumePage from "./components/PageComponents/ResumePage";
import BlogPage from "./components/PageComponents/BlogPage";
import "../src/assets/css/style.css";
// import NavBar from "./components/NavBar";
import ErrorPage from "./components/PageComponents/ErrorPage";
import PortfolioPage from "./components/PageComponents/PortfolioPage";
import ContactPage from "./components/PageComponents/ContactPage";
import MessageReceivePage from "./components/PageComponents/MessageReceivedPage";
import ResumeDownloadPage from "./components/PageComponents/ResumeDownloadPage";
import LoadingScreen from "./components/PageComponents/LoadingScreenPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/loadingScreen" element={<LoadingScreen />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route
          path="/contact/messagereceived"
          element={<MessageReceivePage />}
        ></Route>
        <Route path="/resume/download" element={<ResumeDownloadPage />}></Route>
        <Route path="/blog" element={<BlogPage />}></Route>
        <Route path="/portfolio" element={<PortfolioPage />}></Route>
        <Route path="/resume" element={<ResumePage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
