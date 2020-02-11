import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  
  this.handleChange = this.handleChange.bind(this);
  
  };

handleChange(e) {
  const { value, type, checked } = e.target;
  type === 'checkbox' ? 
    this.props.onCompleted(checked): 
    this.props.onFilterText(value);  
}

  render() {
    return (
      <div className="container-searchBar">
        <input 
          type='text' 
          value={this.props.filterText}
          onChange={this.handleChange}
          placeholder='search...'  
        /><br />
        <div>
          <input 
            type='checkbox'
            name='isCompleted'
            checked={this.props.isCompleted} 
            onChange={this.handleChange}  
          />
          <span>show completed projects only</span>
        </div>
      </div>
    );  
  }
}

export default SearchBar;

//app.js
//  AddProject
//  Project
//    ProjectItem





