import React from "react";
import profilePhoto from "../assets/profilePhoto.jpg";
const AboutSection = () => {
  return (
    <div id="about">
      <div className="aboutSection">
        <div className="aboutSectionContent">
          <div className="aboutMe">About Me . . .</div>
          <div className="name">Frontend Developer</div>
          <div className="description2">
            <div>
              Aspiring Frontend Developer | Python Enthusiast with a strong
            </div>
            <div>
              foundation in HTML, CSS, JavaScript, React, and Python. 200+
            </div>
            <div>questions on leetcode etc.</div>
          </div>
          <a href="#projects"><button className="seeMore">See More</button></a>
        </div>
        <div className="image">
          <img src={profilePhoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
