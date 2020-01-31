import React from 'react';

function ProjectItem(props) {
  	return (	 
	    <li className="Project">
        {props.project.title}: {props.project.category}    
      </li>    
	);
  	
 	  
}

export default ProjectItem;
