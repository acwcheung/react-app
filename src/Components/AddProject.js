import React from 'react';
import uuid from 'uuid';

class AddProject extends React.Component {
  constructor(props) {
    super()
    this.state = {
        title: '',
        category: 'Web Design'  
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }
  
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
        id: uuid.v4(),
        [name]: value  
    });
  }

  handleSubmit(e) {
    const newProject = this.state;
    e.preventDefault();
    this.props.addProject(newProject);
  }    

  render() { 
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category} >{category}</option>
    });
    
    return (  
      <div>
        <h3>Add Projects</h3>
        <form onSubmit={this.handleSubmit} >
          <div>
            <label>Title: </label>
            <input 
              name='title' 
              type='text' 
              value={this.state.title}  
              onChange={this.handleChange}
              required />
          </div>
          <div>
            <label>Category: </label>
            <select 
              name='category'
              value={this.state.category}
              onChange={this.handleChange} >
              {categoryOptions}
            </select>
          </div>
          <input type='submit' value='submit' />
        </form>
      </div>
    );  
  }  	
	  
}

export default AddProject;
