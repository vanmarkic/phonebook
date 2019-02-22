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
      .catch(err => this.setState({err}))     
    
  
    }

      
  handleChange = (e) => {
    const {value, id} = e.currentTarget
    if (id === 'firstName') {
      this.setState({ entry: {...this.state.entry, firstName: value} });  
    } else if (id === 'lastName') {
      this.setState({ entry: {...this.state.entry, lastName: value} });  
    } else {
      this.setState({ entry: {...this.state.entry, phoneNumber: value} });  
    }
  }

  
  postChanges() {
    const { firstName, lastName, phoneNumber, _id} = this.state.entry
    axios
      .put(api + _id, {
        firstName,
        lastName,
        phoneNumber,
      })
      .then(resp => console.log(resp))
      .catch(err => console.log(err))
      .then(() => this.props.history.replace('/'));
}


  render() {

     const { entry } = this.state
    
    return (      <div>
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
