import React from "react";
import "./aboutMe.css";
import profile from "../../images/profile-1.jpg";

function AboutMe() {
  return (
    <div className="about__section" id="about-me">
      <div>
        <img src={profile} alt="person icon" />
      </div>
      <div className="about__text">
        <h1>ABOUT ME</h1>
        <p>
          Highly creative, innovative professional and certified Full stack web
          developer with strong experience in creating high-speed websites,
          apps, and platforms fueling competitive advantage and revenue growth.
          Skilled in analyzing programming systems to test, debug, and install
          software applications. Possess strong knowledge of translating
          detailed designs into the computer systems and preparing required
          software documentation by using standard methodologies. Equipped with
          collaboration, interpersonal, and multitasking skills along with a
          knack of working within a fast-paced environment.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
