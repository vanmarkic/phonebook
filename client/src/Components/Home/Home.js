import React, { Component } from "react";
import Search from './Search'



export class Home extends Component {
  state= {
    searchvalue: "",
    entries:  []
  }

  fetchAll 

  getResults = (input) => {
    console.log(input)

  }
  
  
  render() {
    return (
      <div>
        <Search getResults={this.getResults} />
        
      </div>
    )
  }
}

export default Home;