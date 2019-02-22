import React, { Component } from 'react'

export default class EditEntry extends Component {
  state = {
    

  }

  componentDidMount() {
    this.setState({entryId : this.props.location.entryId})
   
  }

  render() {
    const { entryId } = this.state
    
    return (
      <div>
        {entryId ? entryId : "No Id Provided"}
      </div>
    )
  }
}
