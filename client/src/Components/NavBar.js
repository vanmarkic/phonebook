import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    
    return (
      <div>       
          <Link to="/">Home</Link>
          <Link to="/new">New Entry</Link>
          <Link to="/edit">Edit</Link>         
      </div>
    )
  }
}
