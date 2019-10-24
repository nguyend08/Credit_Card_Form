import React from "react";
import Form from './Form.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }


  render() {
    return (
      <div>
        <Form />
        <h1>hi</h1>
      </div>
    )
  }
}
