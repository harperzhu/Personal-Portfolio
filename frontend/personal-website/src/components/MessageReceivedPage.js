import React from "react";
import SideBar from "./SideBar";
import MessageReceived from "./subcomponents/MessageReceived";
import NavBar from "./NavBar";

export default function MessageReceivedPage() {
  return (
    <>
      <main>
        <SideBar />
        <MessageReceived />
      </main>
    </>
  );
}
