import React from "react";
import SideBar from "./SideBar";
import Portfolio from "./subcomponents/Portfolio";
import NavBar from "./NavBar";
//*TODO: fix the styling here */

export default function PortfolioPage() {
  return (
    <div className="overall-container">
      <div>
        <body>
          <main>
            <SideBar />
            <Portfolio />
          </main>

          <script src="./assets/js/script.js"></script>

          <script
            type="module"
            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          ></script>
          <script
            nomodule
            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          ></script>
        </body>
      </div>
    </div>
  );
}
