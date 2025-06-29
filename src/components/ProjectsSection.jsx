// import React from "react";
// import loanEaseImg from '../assets/loanEase.png';
// import portfolioImg from '../assets/portfolio.png';
// const ProjectsSection = () => {
//   return (
//     <div>
//       <div className="projectSection">
//         <div className="projectSectionHeading">Projects</div>
//         <div className="allProjects">
//           <div className="project1 project">
//             <div className="projectImg">
//               <img src={loanEaseImg} alt="" />
//             </div>
//             <div className="projectContent">
//               <div className="projectHeading">LoanEase</div>
//               <div className="projectDescription">
//                 <div>Navigate your loan options with confidence. LoanEase provides powerful</div>
//                 <div>tools and clear insights to help you make smarter financial decisions,</div>
//                 <div>effortlessly.</div>
//                 <button className="try">Demo</button>
//               </div>
//             </div>
//           </div>
//           <div className="project2 project">
//             <div className="projectImg">
//               <img src={portfolioImg} alt="" />
//             </div>
//             <div className="projectContent">
//               <div className="projectHeading"></div>
//               <div className="projectDescription"></div>
//             </div>
//           </div>
//           <div className="project3 project">
//             <div className="projectImg"></div>
//             <div className="projectContent">
//               <div className="projectHeading"></div>
//               <div className="projectDescription"></div>
//             </div>
//           </div>
//           <div className="project4 project">
//             <div className="projectImg"></div>
//             <div className="projectContent">
//               <div className="projectHeading"></div>
//               <div className="projectDescription"></div>
//             </div>
//           </div>
//           <div className="project5 project">
//             <div className="projectImg"></div>
//             <div className="projectContent">
//               <div className="projectHeading"></div>
//               <div className="projectDescription"></div>
//             </div>
//           </div>
//           <div className="project6 project">
//             <div className="projectImg"></div>
//             <div className="projectContent">
//               <div className="projectHeading"></div>
//               <div className="projectDescription"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ProjectsSection;

import React from "react";

const ProjectsSection = () => {
  return (
    <div id="projects">
      <div className="projectSection">
        <div className="projectSectionHeading">Projects</div>
        <div className="allProjects">
          <div className="project1 project"><span><a href="https://loan-ease-delta.vercel.app">LoanEase</a></span></div>
          <div className="project2 project"><span><a href="#home">Portfolio</a></span></div>
          <div className="project3 project"><span><a href="https://aman739-code.github.io/Student-Grade-Calculator/">Grade Calculator</a></span></div>
          <div className="project4 project"><span><a href="https://calculator-psi-rosy-65.vercel.app">Calculator</a></span></div>
          <div className="project5 project"><span><a href="https://aman739-code.github.io/Word-Counter/">Word Counter</a></span></div>
          <div className="project6 project"><span><a href="https://aman739-code.github.io/A/">Amazon Clone</a></span></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
