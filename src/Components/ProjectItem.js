import React from 'react';

class ProjectItem extends React.Component {
  
  deleteProject(e) {
	const id = e.target.id;
	this.props.onDelete(id);
  }

  render() {
  	return (	 
	  <li className="Project">
        {this.props.project.title}: {this.props.project.category}         
        <button onClick={this.deleteProject.bind(this)} id={this.props.project.id} >X</button>
      </li>

	);
  }	
}

export default ProjectItem;
