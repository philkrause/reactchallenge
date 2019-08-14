import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import FormField from './components/FormField'

class App extends Component {
  state = {
    subject: '',
    body: ''
  }

  onChange = ({ name, value }) => {
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <>
        <FormField
          name="subject"
          subject={this.state.subject}
          onChange={this.onChange}
        />
        <FormField
          name="body"
          subject={this.state.body}
          onChange={this.onChange}
        />
      </>
    )
  }
}

export default App
