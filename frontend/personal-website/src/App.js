// import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
// import React, { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
// import Blog from "./components/Blog";
import Contact from "./components/subcomponents/Contact";
// import Portfolio from "./components/Portfolio";
import ResumePage from "./components/ResumePage";
import BlogPage from "./components/BlogPage";
import "../src/assets/css/style.css";
// import NavBar from "./components/NavBar";
import ErrorPage from "./components/ErrorPage";
import PortfolioPage from "./components/PortfolioPage";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/blog" element={<BlogPage />}></Route>
        <Route path="/portfolio" element={<PortfolioPage />}></Route>
        <Route path="/resume" element={<ResumePage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
