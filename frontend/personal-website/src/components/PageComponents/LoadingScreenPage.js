import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoadingScreenPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const appendScript = (scriptToAppend) => {
      const externalScript = document.createElement("script");
      // externalScript.onerror = loadError;
      externalScript.id = "external";
      externalScript.async = true;
      externalScript.type = "text/javascript";
      externalScript.setAttribute("crossorigin", "anonymous");
      document.body.appendChild(externalScript);
      externalScript.src = scriptToAppend;
    };

    const removeScript = (scriptToRemove) => {
      let allSuspects = document.getElementsByTagName("script");
      for (let i = allSuspects.length; i >= 0; i--) {
        if (
          allSuspects[i] &&
          allSuspects[i].getAttribute("src") !== null &&
          allSuspects[i].getAttribute("src").indexOf(`${scriptToRemove}`) !== -1
        ) {
          allSuspects[i].parentNode.removeChild(allSuspects[i]);
        }
      }
    };

    const handleScriptLoad = () => {
      // Three.js library is fully loaded, execute your animation code here

      // Delay navigation to the home page after 5 seconds
      setTimeout(() => {
        navigate("/");
      }, 20000);
    };

    // Append the script
    console.log("starting loading script");
    const scriptPath =
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r125/three.min.js";
    appendScript(scriptPath);

    // Clean up function to remove the script when component unmounts
    return () => {
      console.log("starting unloading script");
      removeScript(scriptPath);
    };
  }, [navigate]);

  return <div id="loading-screen">{/* Loading screen content */}</div>;
}

export default LoadingScreenPage;
