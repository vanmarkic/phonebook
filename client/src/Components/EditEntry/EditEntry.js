import React, { Component } from 'react'

export default class EditEntry extends Component {
  state = {

  }

  componentDidMount() {
    console.log(this.props.entry)
  }

  render() {
    return (
      <div>
        Edit Entry
      </div>
    )
  }
}
