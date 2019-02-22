import React, { PureComponent } from 'react'
import './_Contact.css';

export default class Contact extends PureComponent {
  render() {
    const {firstName, lastName, phoneNumber} = this.props
    return (
      
      <div className="contact">
          <h3>{firstName}</h3>
          <h3>{lastName}</h3>
          <h3>{phoneNumber}</h3>
      </div> 
      )
  }
}
