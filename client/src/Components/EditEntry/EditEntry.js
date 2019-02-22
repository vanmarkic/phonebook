import React, { Component } from 'react'
import axios from 'axios';

import api from '../../api/EndpointAddress'


export default class EditEntry extends Component {
  state = {
    updateSuccess: null   

  }

  componentDidMount() {
    const {entryId} = this.props.location
    axios.get(api + entryId)
      .then(entry => this.setState({entry: entry.data}))
      .catch(err => this.setState({err}))     }

  handleChange = (e) => {
    const { id, value} = e.currentTarget
    const { id } = this.state.entry
    // console.log(this.state.entry);
    this.setState({id: value })
  }
  
  postChanges() {
    console.log("button working")
  }

  render() {

    console.log(this.state.entry)
    const { entryId, entry } = this.state
    
    return (
      <div>
        {entry ?  <>
                    <input id="firstName" value={entry.firstName} onChange={this.handleChange} />
                    <input id="lastName" value={entry.lastName} onChange={this.handleChange}/>
                    <input id="phoneNumber" value={entry.phoneNumber} onChange={this.handleChange}/> 
                    <button onClick={() => this.postChanges()}>Save changes</button>
                  </>  
                  : "No Id Provided"}
      </div>
    )
  }
}
