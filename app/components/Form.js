import React from "react";
import Info from "./Info";
import Card from "./Card";

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        number: "",
        name: "",
        month: "MM",
        year: "YY",
        cvv: ""
      },
      flipped: false,
      clicked: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.flip = this.flip.bind(this);
    this.unflip = this.unflip.bind(this);
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  flip() {
    if (!this.state.flipped) {
      this.setState({
        flipped: true,
        clicked: true
      });
    }
  }

  unflip() {
    if (this.state.flipped) {
      this.setState({
        flipped: false,
        clicked:false
      })
    }
  }

  render() {
    const { fields, click, flipped } = this.state;

    return (
      <div class="container">
        <Card 
          fields={fields} 
          flipped={flipped}
        />
        <Info 
          fields={fields} 
          handleChange={this.handleChange} 
          click={click}
          flip={this.flip}
          unflip={this.unflip}
        />
      </div>
    );
  }
}
