import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  
  this.handleChange = this.handleChange.bind(this);
  this.handleChecked = this.handleChecked.bind(this);
  };

handleChange(e) {
  this.props.onFilterText(e.target.value)
}

handleChecked(e) {
  this.props.onCompleted(e.target.checked)
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
            onClick={this.handleChecked}  
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





