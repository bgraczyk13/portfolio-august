import React from "react";
import technologies from "./technologies.css";
import DevIcon from "devicon-react-svg";
import { techs } from "../../helpers/tech";

function Technologies() {
  return (
    <div className="technologies__section" id="technologies">
      <div>
        <h1 style={{ textAlign: "center" }}>
          Some of the technologies that I use
        </h1>
      </div>
      <div className="tech__cardscontain">
        {techs.map((e, idx) => {
          return (
            <div key={idx} className="tech__card">
              <DevIcon className="tech__icons" icon={e.iconName} />
              <span style={{ margin: "5px", fontSize: "1.5rem" }}>
                {e.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Technologies;
