import React from 'react';
import ProjectItem from './ProjectItem';

class Project extends React.Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }
 
  render() {
    let projectItems;
    if(this.props.project) {
      projectItems = this.props.project.map(project => {
        return (
          <ProjectItem key={project.id} project={project} onDelete={this.deleteProject.bind(this)} />
        )
      });
    }

    return (  
      <ul className="Project">
        {projectItems}      
      </ul>
    );
  }  	
}

export default Project;

