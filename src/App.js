import React from 'react';
import './App.css';
import Project from './Components/Project';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
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
    }
  }

  render() {
    return (
      <div className="App">
        My App
        <Project project={this.state.projects} />      
      </div>
    );  
  }
}

export default App;
