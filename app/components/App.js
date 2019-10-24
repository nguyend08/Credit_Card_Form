import React from "react";
import Form from './Form.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }


  render() {
    return (
      <div class='wrapper'>
        <Form />
      </div>
    )
  }
}
