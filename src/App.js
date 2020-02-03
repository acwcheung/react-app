import React from 'react';
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
  };
//how to pass data from child to main?
//function flow from main to child
//child executes the function with input
//function return the output to main
handleAddProject(project) {
  let projects = this.state.projects;
  projects.push(project);
  this.setState({projects: projects});  
}

  componentDidMount() {
    this.setState({projects: [
      {
        title: 'Business website',
        category: 'Web Design'  
      },
      {
        title: 'Social App',
        category: 'Mobile Development'  
      },
      {
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
        <Project project={this.state.projects} />      
      </div>
    );  
  }
}

export default App;
