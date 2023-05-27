import React from "react";
import SideBar from "./SideBar";
import Contact from "./subcomponents/Contact";
import NavBar from "./NavBar";
/*TODO: fix the styling here */

export default function ContactPage() {
  return (
    <div className="overall-container">
      <body>
        <main>
          <SideBar />
          <Contact />
        </main>

        <script src="./assets/js/script.js"></script>
      </body>
    </div>
  );
}
