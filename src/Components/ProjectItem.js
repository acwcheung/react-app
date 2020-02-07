import React from 'react';

class ProjectItem extends React.Component {
  
  deleteProject(e) {
	const id = e.target.id;
	this.props.onDelete(id);
  }

  render() {
    const project = this.props.project;
  	return (	 
	  <li className="Project">
      <span style={project.completed === 'no'? {color: 'red'}: {color: 'black' }} >
        {this.props.project.title}: {this.props.project.category}
      </span>           
      <button onClick={this.deleteProject.bind(this)} id={this.props.project.id} >X</button>
    </li>

	);
  }	
}

export default ProjectItem;
