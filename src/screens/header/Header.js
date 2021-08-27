import React from "react";
import "./header.css";
import Typed from "react-typed";

function header() {
  return (
    <div className="header">
      <h1>Who am I?</h1>
      <Typed
        strings={[
          " ",
          "Software Engineer",
          " ",
          "Full stack developer",
          " ",
          "Passion for Front-end development",
          " ",
          "Problem Solver",
          " ",
          " ",
        ]}
        typeSpeed={60}
        backSpeed={40}
        loop
      />
    </div>
  );
}

export default header;
