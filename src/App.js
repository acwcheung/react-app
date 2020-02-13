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
    this.handleSearch = this.handleSearch.bind(this);
    
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

deleteProject(e) {
  const id = e.target.id;
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

handleSearch(e) {
  const { value, type, checked } = e.target;
  type === 'checkbox' ?
    this.setState({isCompleted: checked}): 
    this.setState({filterText: value})  
}

render() {
  return (
    <div className="container-main">
      <h1>KOOL Web & App Development</h1>
      <SearchBar 
        filterText={this.state.filterText}
        isCompleted={this.state.isCompleted}
        onSearch={this.handleSearch}        
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






