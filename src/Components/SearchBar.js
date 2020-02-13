import React from 'react';

function SearchBar(props) {
  return (
    <div className="container-searchBar">
      <input 
        type='text' 
        value={props.filterText}
        onChange={props.onSearch}
        placeholder='search...'  
      /><br />
      <div>
        <input 
          type='checkbox'
          name='isCompleted'
          checked={props.isCompleted} 
          onChange={props.onSearch}  
        />
        <span>show completed projects only</span>
      </div>
    </div>
  );  
  
}

export default SearchBar;






