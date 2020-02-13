import React from 'react';

function ProjectItem( { project, onDelete } ) {
  return (	 
	  <li>
      <span style={project.completed === 'no'? {color: 'blue'}: {color: 'black' }} >
        {project.title}: {project.category}
      </span>           
      <button onClick={onDelete} id={project.id} >X</button>
    </li>

	);
  
}

export default ProjectItem;
