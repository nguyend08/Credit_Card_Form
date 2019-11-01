import React from 'react';

export default function Card(props) {
  const { fields } = props
  return (
    <div class='cardContainer'>
      <div class='card'>
        <div class='front-card'>
          <fieldset id='card-chip'>
            <img 
              src='https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png'
              className='chip'
            />
          </fieldset>
          <fieldset id='card-type'>
            <img
              src='https://bestofcategoryreviews.com/wp-content/uploads/2016/01/Visa-symbol.jpg'
              className='type'
            />
          </fieldset>
          <fieldset id='card-number'>
            <p>{fields.number}</p>
          </fieldset>
          <fieldset id='card-holder'>
            <p>{fields.name}</p>
          </fieldset>
          <fieldset id='expires'>
            <p>{fields.month}/{fields.year}</p>
          </fieldset>
        </div>
        <div class='back-card'>
            
        </div>
      </div>
    </div>
  )
}