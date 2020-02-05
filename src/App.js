import React from 'react';
import uuid from 'uuid';
import './App.css';
import Project from './Components/Project';
import AddProject from './Components/AddProject';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
    this.handleAddProject = this.handleAddProject.bind(this);
    this.deleteProject = this.deleteProject.bind(this);
  };

deleteProject(id) {
  let projects = this.state.projects;
  let index = projects.findIndex((item) => item.id = id);
  projects.splice(index, 1);
  this.setState({projects: projects});  
}


handleAddProject(project) {
  let projects = this.state.projects;
  projects.push(project);
  this.setState({projects: projects});  
}

  componentDidMount() {
    this.setState({projects: [
      {
        id: uuid.v4(),
        title: 'Business website',
        category: 'Web Design'  
      },
      { 
        id: uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development'  
      },
      { 
        id: uuid.v4(),
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'  
      }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject} />
        <h3>Our projects</h3>
        <Project project={this.state.projects} onDelete={this.deleteProject}  />      
      </div>
    );  
  }
}

export default App;

//app.js
//  AddProject
//  Project
//    ProjectItem





