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
      <div class='container'>

          <div class='card'>
            CARD
          </div>
          <div class='form'>
            <form>
              <label>
                Card Number:
                <input type="number" />
              </label>
              <label>
                Card Name:
                <input type="text" />
              </label>
              <label>
                Expiration Date:
                <input type="number" />
              </label>
                <input type="number" />
              <label>
                CVV:
                <input type="number" />
              </label>
            </form>
          </div>

      </div>
       
    )
  }
}