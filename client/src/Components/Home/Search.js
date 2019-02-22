import React, { Component } from "react";


export class Search extends Component {
  
  handleInput = e => {    
    console.log(e.currentTarget.value); 
    this.props.getResults(e.currentTarget.value);
      
  };

  render() {
    return (
     
        <input  placeholder="Type in a name or number..."       
          onChange={this.handleInput}
        />
   
    );
  }
}

export default Search;