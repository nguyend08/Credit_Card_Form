import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      number: '',
      name: '',
      month: '',
      year: '',
      cvv: ''
    }
  }

  render() {
    return(
      <div>
        <h1>hi</h1>
      </div>
    )
  }
}