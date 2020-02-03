import React from 'react';

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
  //using state and setState to make state being single source of truth
  handleChange(e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    })
  }

  handleSubmit(e) {
    let newProject = this.state;
    //prevent the refresh after the form is submitted
    e.preventDefault();
    //recieve the function from main app
    this.props.addProject(newProject);
  }    

  render() { 
    //map function put here to allow access from below
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category} >{category}</option>
    });
    
    return (  
      <div>
        <h3>Add Projects</h3>
        <form onSubmit={this.handleSubmit} >
          <div>
            <label>Title</label>
            <input 
              name='title' 
              type='text' 
              value={this.state.title}  
              onChange={this.handleChange}
              required />
          </div>
          <div>
            <label>Category</label>
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
