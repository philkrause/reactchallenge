import React, { Component } from 'react'
class Input extends React.Component {
  render() {
    console.log('input', this.props)
    return (
      <React.Fragment>
        <label>{this.props.name}</label>
        <input {...this.props} />
      </React.Fragment>
    )
  }
}

export default Input
