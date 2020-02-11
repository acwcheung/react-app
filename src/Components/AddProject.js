import React from 'react';
import uuid from 'uuid';

class AddProject extends React.Component {
  constructor(props) {
    super()
    this.state = {
        id: '',
        title: '',
        category: 'Web Design',
        completed: 'no'  
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }
  
  handleChange(e) {
    let { name, value } = e.target;
    this.setState({
        id: uuid.v4(),
        [name]: value,
    });
  }

  handleSubmit(e) {
    const newProject = this.state;
    console.log(newProject);
    e.preventDefault();
    this.props.addProject(newProject);
  }

  render() { 
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category} >{category}</option>
    });
    
    return (  
      <div className='addproject'>
        <h3>Add Projects</h3>
        <form onSubmit={this.handleSubmit} >
          <div>
            <label className='addproject-label'>Title: </label>
            <input 
              name='title' 
              type='text' 
              value={this.state.title}  
              onChange={this.handleChange}
              required />
          </div>
          <div>
            <label className='addproject-label'>Category: </label>
            <select 
              name='category'
              value={this.state.category}
              onChange={this.handleChange} >
              {categoryOptions}
            </select>
          </div>
          <div>
            <label className='addproject-label'>Status: </label>
            <select 
              name='completed'
              value={this.state.completed}
              onChange={this.handleChange} >
              <option value='no'>In progress</option>
              <option value='yes'>Completed</option>
            </select>
          </div>
          <input type='submit' value='Submit' />
        </form>
      </div>
    );  
  }  	
	  
}

export default AddProject;
