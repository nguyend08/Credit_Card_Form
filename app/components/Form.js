import React from 'react';
import Info from './Info'
import Card from './Card'

export default class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fields:{
        number: '',
        name: '',
        month: '',
        year: '',
        cvv: '',
      }
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    })
  }

  render() {

    return(
      <div class='container'>
        <Card />
        <Info 
          fields={this.state.fields}
          handleChange={this.handleChange}
        />
      </div>
       
    )
  }
}