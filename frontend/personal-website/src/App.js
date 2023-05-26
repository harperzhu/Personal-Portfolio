// import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
// import React, { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import "../src/assets/css/style.css";
import NavBar from "./components/NavBar";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/Portfolio" element={<Portfolio />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
