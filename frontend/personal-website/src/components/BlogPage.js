import React from "react";
import SideBar from "./SideBar";
import Blog from "./subcomponents/Blog";

export default function BlogPage() {
  return (
    <div className="overall-container">
      <body>
        <main>
          <SideBar />
          <Blog />
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
  );
}
