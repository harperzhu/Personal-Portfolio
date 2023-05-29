import React from "react";
import SideBar from "./SideBar";
import AboutPage from "./AboutPage";

//TODO: Fix the mobile view of the about page
//TODO: fix the show contact button on mobile view
export default function HomePage() {
  return (
    // <body>
    <>
      <main>
        <SideBar />
        <AboutPage />
      </main>
      <script src="./assets/js/script.js"></script>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </>
    // </body>
  );
}
