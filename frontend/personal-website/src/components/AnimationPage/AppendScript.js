import React from "react";

export default function AppendScript() {
  const appendScript = (scriptToAppend) => {
    const script = document.createElement("script");
    script.src = scriptToAppend;
    script.async = true;
    document.body.appendChild(script);
  };
  return <div>AppendScript</div>;
}
