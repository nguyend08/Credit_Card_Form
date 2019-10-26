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

  handleChange(event) {
    this.setState()
  }

  render() {
    return(
      <div class='container'>
        <div class='card'>
          CARD
        </div>
        <div class='formContainer'>
          <form className='form'>
            <label>
              Card Number:
              <input type='number' className='number'/>
            </label>
            <label>
              Card Name:
              <input type='text' className='name'/>
            </label>
            <label>
              Expiration Date:
              <input type='number' className='month'/>
            </label>
              <input type='number' className='year'/>
            <label>
              CVV:
              <input type='number' className='cvv'/>
            </label>
            <fieldset className='button'>
            <input type='submit' className='submit' maxLength='500'/>
            </fieldset>
          </form>
        </div>
      </div>
       
    )
  }
}