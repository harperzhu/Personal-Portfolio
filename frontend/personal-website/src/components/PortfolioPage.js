import React from "react";
import SideBar from "./SideBar";
import Portfolio from "./subcomponents/Portfolio";
//*TODO: fix the styling here */

export default function PortfolioPage() {
  return (
    // <body>
    <div className="overall-container">
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
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </div>
    // </body>
  );
}
