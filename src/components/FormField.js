import React, { Component } from 'react'
import Input from './Input'

class FormField extends React.Component {
  onChange = event => {
    event.stopPropagation()
    this.props.onChange({
      name: event.target.name,
      value: event.target.value
    })
  }
  render() {
    return <Input {...this.props} onChange={this.onChange} />
  }
}

export default FormField
