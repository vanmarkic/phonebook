import React, { Component } from 'react'
import axios from 'axios';


import api from '../../api/EndpointAddress'


export default class EditEntry extends Component {
  state = {
    entry : {
      firstName: '',
      lastName: '',
      phoneNumber: '',
    }

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
    const {phoneNumber} = this.state.entry
    if (phoneNumber[0] === '+' && phoneNumber[3] === ' ' && phoneNumber[6] === ' ') {
    const { firstName, lastName, phoneNumber} = this.state.entry  
      axios
        .post(api , {
        firstName,
        lastName,
        phoneNumber,
        })
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        .then(() => this.props.history.replace('/'));
      } else {
        this.setState({errNum : "Please respect this phone number format : +XX XX XXXXXXX"})
      }
 
  }


  render() {

     const { entry, errNum } = this.state
    
    return (     
      <div>
          {errNum ? <h4>{errNum}</h4>
          : '' }
          <input id="firstName" placeholder='first name' value={entry.firstName} onChange={this.handleChange} />
          <input id="lastName" placeholder='last name' value={entry.lastName} onChange={this.handleChange}/>
          <input id="phoneNumber" placeholder='+xx xx xxxxxxx' value={entry.phoneNumber} onChange={this.handleChange}/> 
          <button onClick={() => this.postChanges()}>Save changes</button>

      </div>
    )
  }
}
