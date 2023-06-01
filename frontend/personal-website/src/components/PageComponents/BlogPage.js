import React from "react";
import SideBar from "../ShareComponents/SideBar";
import Blog from "../subcomponents/Blog";

export default function BlogPage() {
  return (
    <div className="overall-container">
      {/* <div className="content-container"> */}

      <main>
        <SideBar />
        <Blog />
      </main>

      {/* </div> */}

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
  );
}
