import React from "react";
// import SideBar from "../SideBar";
import reactIcon from "../../assets/images/frameworkImage/react-icon.svg";
import dockerIcon from "../../assets/images/frameworkImage/docker-icon.svg";
import restAPIIcon from "../../assets/images/frameworkImage/rest-api-icon.svg";
import figmaIcon from "../../assets/images/frameworkImage/figma-icon.svg";
import boobstrapIcon from "../../assets/images/frameworkImage/bootstrap-icon.svg";
import azureIcon from "../../assets/images/frameworkImage/azure-icon.svg";
import awsIcon from "../../assets/images/frameworkImage/aws-icon.svg";
import JqUERYIcon from "../../assets/images/frameworkImage/jquery-icon.svg";
import rubyOnRailsIcon from "../../assets/images/frameworkImage/ruby-on-rails-icon.svg";
import swiftUIIcon from "../../assets/images/frameworkImage/swiftui-icon.svg";
export default function Framework() {
  return (
    <section class="skill">
      <h3 class="h3 skills-title">Framework </h3>
      <img
        src={reactIcon}
        alt="react"
        style={{
          width: "62px",
          height: "62px",
          display: "inline-block",
        }}
      />
      <img
        src={dockerIcon}
        alt="docker"
        style={{
          width: "62px",
          height: "62px",
          filter: "invert(100%)",
          display: "inline-block",
        }}
      />
      <img
        src={restAPIIcon}
        alt="restAPI"
        style={{
          width: "62px",
          height: "62px",
          filter: "invert(100%)",
          display: "inline-block",
        }}
      />
      <img
        src={figmaIcon}
        alt="figma"
        style={{
          width: "62px",
          height: "62px",
          filter: "invert(100%)",
          display: "inline-block",
        }}
      />
      <img
        src={azureIcon}
        alt="azure"
        style={{
          width: "62px",
          height: "62px",
          filter: "invert(100%)",
          display: "inline-block",
        }}
      />
      <img
        src={boobstrapIcon}
        alt="azure"
        style={{
          width: "62px",
          height: "62px",
          filter: "invert(100%)",
          display: "inline-block",
        }}
      />
      <img
        src={awsIcon}
        alt="AWS"
        style={{
          width: "62px",
          height: "62px",
          filter: "invert(100%)",
          display: "inline-block",
        }}
      />
      <img
        src={swiftUIIcon}
        alt="AWS"
        style={{
          width: "62px",
          height: "62px",
          filter: "invert(100%)",
          display: "inline-block",
        }}
      />
      <img
        src={rubyOnRailsIcon}
        alt="AWS"
        style={{
          width: "62px",
          height: "62px",
          filter: "invert(100%)",
          display: "inline-block",
        }}
      />
      <img
        src={JqUERYIcon}
        alt="AWS"
        style={{
          width: "62px",
          height: "62px",
          filter: "invert(100%)",
          display: "inline-block",
        }}
      />
    </section>
  );
}
