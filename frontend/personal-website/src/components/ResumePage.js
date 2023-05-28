import React from "react";
import SideBar from "./SideBar";
import Resume from "./subcomponents/Resume";

export default function ResumePage() {
  return (
    <div className="overall-container">
      <main>
        <SideBar />
        <Resume />
      </main>

      {/* <script src="./assets/js/script.js"></script>

      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script> */}
    </div>
  );
}
