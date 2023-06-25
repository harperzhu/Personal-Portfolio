import React from "react";
import SideBar from "../ShareComponents/SideBar";
import Resume from "../subcomponents/Resume";

export default function ResumePage() {
  return (
    <div className="overall-container">
      <main>
        <SideBar />
        <Resume />
      </main>
    </div>
  );
}
