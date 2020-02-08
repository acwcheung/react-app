import React from 'react';
import ProjectItem from './ProjectItem';

class Project extends React.Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }
 
  render() {
    let projects = this.props.projects
    let filterText = this.props.filterText;
    let isCompleted = this.props.isCompleted;    
    let projectItems = projects.map(project => {
      if(project.title.toLowerCase().indexOf(filterText) === -1) {
        return null };
      if(isCompleted && project.completed === 'no') { return null };     
      return (
        <ProjectItem key={project.id} project={project} onDelete={this.deleteProject.bind(this)} />
      )
    });
    return (
      <div className="projects"> 
        <h3>Our projects</h3>  
        <ul>
          {projectItems}      
        </ul>
      </div>
    );
  }  	
}

export default Project;

