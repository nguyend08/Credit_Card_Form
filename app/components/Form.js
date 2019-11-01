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
        month: "",
        year: "",
        cvv: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  render() {
    const { fields } = this.state;

    return (
      <div class="container">
        <Card fields={fields} />
        <Info fields={fields} handleChange={this.handleChange} />
      </div>
    );
  }
}
