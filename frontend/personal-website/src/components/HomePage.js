import React from "react";
import SideBar from "./SideBar";
import AboutPage from "./AboutPage";

export default function HomePage() {
  return (
    <div>
      <body>
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
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
      </body>
    </div>
  );
}
