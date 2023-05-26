// import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

{
  /* <link rel="shortcut icon" href="./assets/images/logo.ico" type="image/x-icon">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet"> */
}

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/portfoilio" element={<Portfolio />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
