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
          <fieldset id="number">
            <label>
              Card Number:
              <input type='number' className='numberBar'/>
            </label>
          </fieldset>
          <fieldset id="name">
            <label>
              Card Name:
              <input type='text' className='nameBar'/>
            </label>
          </fieldset>
          <fieldset id="month">
            <label>
              Month:
              <input type='number' className='monthBar'/>
            </label>
          </fieldset>
          <fieldset id="year">
            <label>
              Year:
              <input type='number' className='yearBar'/>
            </label> 
          </fieldset>
          <fieldset id="cvv">
            <label>
              CVV:
              <input type='number' className='cvvBar'/>
            </label>
          </fieldset>
            <fieldset className='button'>
            <input type='submit' className='submit' maxLength='500'/>
            </fieldset>
          </form>
        </div>
      </div>
       
    )
  }
}