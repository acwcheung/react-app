import React from 'react';
import ProjectItem from './ProjectItem';

function Project(props) {
  	let projectItems;
  	if(props.project) {
  		projectItems = props.project.map(project => {
  		  return (
  		  	<ProjectItem key={project.title} project={project} />
        )
		  });
    }
  	
  	return (	
	    <ul className="Project">
        {projectItems}	    
	    </ul>
    );
  	
 	  
}

export default Project;
