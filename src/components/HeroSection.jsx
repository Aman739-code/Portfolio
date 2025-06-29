import React from "react";
import "../App.css";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Icon } from '@iconify/react';
import profilePhoto from "../assets/profilePhoto.jpg";

const HeroSection = () => {
  return (
    <div id="home">
      <div className="heroSection">
        <div className="allDetails">
          <div className="firstLine">
            Hey It's Me
          </div>
          <div className="secondLine">
            Aman
          </div>
          <div className="thirdLine">
            And I am a Frontend Developer
          </div>
          <div className="description">
            <div>Aspiring Frontend Developer | Python Enthusiast with a strong</div>
            <div>foundation in HTML, CSS, JavaScript, React, and Python. 200+</div>
            <div>questions on leetcode etc.</div>
          </div>
          <div className="links">
            <a href="https://leetcode.com/u/Aman___Bhatnagar/"><Icon icon="simple-icons:leetcode" width="24" /></a>
            <a href="https://codeforces.com/profile/Aman_Bhatnagar"><Icon icon="simple-icons:codeforces" width="24" /></a>
            <a href="https://www.geeksforgeeks.org/user/amanvigotq/"><Icon icon="simple-icons:geeksforgeeks" width="34" /></a>
            <a href="https://github.com/Aman739-code"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/aman-bhatnagar-150077325/"><FaLinkedin /></a>
          </div>
          <a href="/src/assets/Resume-Aman Bhatnagar.pdf" download>
            <button className="downloadResume">Download CV</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
