import React from 'react';
import uuid from 'uuid';
import './App.css';
import Project from './Components/Project';
import AddProject from './Components/AddProject';
import SearchBar from './Components/SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      filterText: "",
      isCompleted: false
    }
    this.handleAddProject = this.handleAddProject.bind(this);
    this.deleteProject = this.deleteProject.bind(this);
    this.handleFilterText = this.handleFilterText.bind(this);
    this.handleCompleted = this.handleCompleted.bind(this);
  };

componentDidMount() {
  this.setState({projects: [
    {
      id: uuid.v4(),
      title: 'Business website',
      category: 'Web Design',
      completed: 'no'  
    },
    { 
      id: uuid.v4(),
      title: 'Social App',
      category: 'Mobile Development',  
      completed: 'yes'  
    },
    { 
      id: uuid.v4(),
      title: 'Ecommerce Shopping Cart',
      category: 'Web Development',  
      completed: 'yes'  
    }
    ]
  })
}  

deleteProject(id) {
  const projects = this.state.projects;
  const index = projects.findIndex(project => project.id === id);
  projects.splice(index, 1);
  this.setState({projects: projects});  
}

handleAddProject(project) {
  let projects = this.state.projects;
  projects.push(project);
  this.setState({projects: projects});  
}

handleFilterText(filterText) {
  this.setState({filterText: filterText})
}

handleCompleted(isCompleted) {
  this.setState({isCompleted: isCompleted})
}

render() {
  return (
    <div className="container-main">
      <h1>KOOL Web & App Development</h1>
      <SearchBar 
        filterText={this.state.filterText}
        onFilterText={this.handleFilterText}
        onCompleted={this.handleCompleted}   
      />
      <Project 
        projects={this.state.projects} 
        onDelete={this.deleteProject} 
        filterText={this.state.filterText}
        isCompleted={this.state.isCompleted} 
      />
      <AddProject addProject={this.handleAddProject} />
    </div>
  );  
}
}

export default App;






