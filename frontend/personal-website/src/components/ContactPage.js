import React from "react";
import SideBar from "./SideBar";
import Contact from "./subcomponents/Contact";
import NavBar from "./NavBar";

/*TODO: whenever someone click submit, auto send something to my email */

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