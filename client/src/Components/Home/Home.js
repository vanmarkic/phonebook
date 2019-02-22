import React, { Component } from "react";
import Search from './Search'
import Contact from './Contact'



export class Home extends Component {
  state= {
    searchvalue: "",
    entries:  [
      {
        firstName: "Dragan",
        lastName: "Markovic",
        phoneNumber: "+32486809823",
        id: "0001"
      },
      {
        firstName: "Dragan",
        lastName: "Markovic",
        phoneNumber: "+32486809823",
        id: "0001"
      },
      {
        firstName: "Dragan",
        lastName: "Markovic",
        phoneNumber: "+32486809823",
        id: "0001"
      },

    ]
  }

  fetchAll 

  getResults = (input) => {
    console.log(input);
    this.setState({searchvalue: input})

  }
  
  
  render() {
    const {entries} = this.state
    const results = entries.filter().map((entry, index) => {
      return <Contact key={index} id={id} firstName={entry.firstName} lastName={entry.lastName} phoneNumber={entry.phoneNumber} />
      }
    )

    return (     
      <>
        <Search getResults={this.getResults} />
        {results}      
      </>
      );
  }
}

export default Home;