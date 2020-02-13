import React from 'react';
import ProjectItem from './ProjectItem';

function Project(props) {
  let { projects, filterText, isCompleted, onDelete } = props;  
  let projectItems = projects.map(project => {
    if(project.title.toLowerCase().indexOf(filterText) === -1) {
      return null };
    if(isCompleted && project.completed === 'no') { return null };     
    return (
      <ProjectItem key={project.id} project={project} onDelete={onDelete} />
    )
  });
  return (
    <div className="projects"> 
      <h3>Our projects</h3>  
      <ol>
        {projectItems}      
      </ol>
      <p>Project in blue is in progress</p>      
    </div>
  );
    	
}

export default Project;

