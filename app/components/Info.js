import React from "react";

export default class Info extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { fields, handleChange } = this.props
    
    return (
      <div class="formContainer">
        <form className="form">
          <fieldset id="number">
            <label>
              Card Number
              <input
                type="text"
                className="numberBar"
                name="number"
                value={fields.number}
                onChange={handleChange}
                pattern="^[0-9]{16}$"
                title="Input Full Credit Card Number"
              />
            </label>
          </fieldset>
          <fieldset id="name">
            <label>
              Card Name
              <input
                type="text"
                className="nameBar"
                name="name"
                value={fields.name}
                onChange={handleChange}
                pattern="[a-zA-Z ]*$"
                title="Input Only Alphabetic Characters"
              />
            </label>
          </fieldset>
          <fieldset id="month">
            <label>
              Month
              <select
                className="monthBar"
                name="month"
                value={fields.month}
                onChange={handleChange}
                placeholder="Month"
                required
                title="Please Select A Month"
              >
                <option value="" disabled selected>
                  Month
                </option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </label>
          </fieldset>
          <fieldset id="year">
            <label>
              Year
              <select
                className="yearBar"
                name="year"
                value={fields.year}
                onChange={handleChange}
                placeholder="Year"
                required
              >
                <option value="" disabled selected>
                  Year
                </option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
              </select>
            </label>
          </fieldset>
          <fieldset id="cvv">
            <label>
              CVV
              <input
                type="text"
                className="cvvBar"
                name="cvv"
                value={fields.cvv}
                onChange={handleChange}
              />
            </label>
          </fieldset>
          <fieldset id="button">
            <input type="submit" className="submit" maxLength="500" />
          </fieldset>
        </form>
      </div>
    );
  }
}