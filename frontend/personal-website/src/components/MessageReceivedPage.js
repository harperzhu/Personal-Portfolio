import React from "react";
import SideBar from "./SideBar";
import MessageReceived from "./subcomponents/MessageReceived";

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
