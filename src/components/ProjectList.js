import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const itemList = projects.map(project => {
    return (
    <ProjectItem {...project} key={project.id} />
    )
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}
      
      {itemList}
    
      </div>
    </div>
  );
}

export default ProjectList;
