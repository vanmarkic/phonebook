import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom'
import './_Contact.css';

export default class Contact extends PureComponent {
  render() {
    const {firstName, lastName, phoneNumber, id} = this.props
    return (
      
      <div className="contact">
          <h3>{firstName}</h3>
          <h3>{lastName}</h3>
          <h3>{phoneNumber}</h3>
          <Link to={{pathname:'/edit', entryId: id}}><h3>Edit entry</h3></Link>
      </div> 
      )
  }
}
