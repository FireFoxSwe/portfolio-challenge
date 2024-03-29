import React from "react";

import Projects from "./Projects";

// DeveloperProjects returns a summary of projects I have worked on, displaying 
// the project information using the TileArray component.
const DeveloperProjects = () => {
  /* Generates references to project information files */
  const fullStackPath = "./src/data/projectsFullStack.json";
  const frontEndPath = "./src/data/projectsFrontEnd.json";
  const backEndPath = "./src/data/projectsBackEnd.json";

  return (
    <div>
      <div>
        <h1>Full Stack</h1>
        <Projects path={fullStackPath} />
      </div>
      <div>
        <h1>Front End</h1>
        <Projects path={frontEndPath} />
      </div>
      <div>
        <h1>Back End</h1>
        <Projects path={backEndPath} />
      </div>
    </div>
  );
};

export default DeveloperProjects;