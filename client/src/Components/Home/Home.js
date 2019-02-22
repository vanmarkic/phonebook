import React, { Component } from "react";
import axios from 'axios'

import api from '../../api/EndpointAddress'
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
        _id: "0001"
      },
      {
        firstName: "Foufou",
        lastName: "Markovic",
        phoneNumber: "+32486809823",
        _id: "0001"
      },
      {
        firstName: "Hello",
        lastName: "Markovic",
        phoneNumber: "+32486809823",
        _id: "0001"
      },

    ]
  }

  componentDidMount() {
    axios.get(api)
      .then(res => {
        console.log(res.data);
        this.setState({entries: res.data})})
      .catch(err => this.setState({errorMessage: err}))
  } 

  getResults = (input) => {
    console.log(input);
    this.setState({searchvalue: input.toLowerCase()})

  }
  
  
  render() {
    const {entries, searchvalue} = this.state
    const results = entries.filter(item => item.firstName.toLowerCase().includes(searchvalue) || item.lastName.toLowerCase().includes(searchvalue) ||item.phoneNumber.toLowerCase().includes(searchvalue)).map((entry, index) => {
      return <Contact key={index} id={entry._id} firstName={entry.firstName} lastName={entry.lastName} phoneNumber={entry.phoneNumber} />
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