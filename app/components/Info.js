import React from "react";

export default function Info(props) {
  const { fields, handleChange, flip, unflip } = props;

  return (
    <div class="formContainer">
      <form className="form">
        <fieldset id="form-number">
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
              maxLength="16"
              onClick={unflip}
            />
          </label>
        </fieldset>
        <fieldset id="form-name">
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
              maxLength="35"
              onClick={unflip}
            />
          </label>
        </fieldset>
        <fieldset id="form-month">
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
              onClick={unflip}
            >
              <option value='' disabled selected>
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
        <fieldset id="form-year">
          <label>
            Year
            <select
              className="yearBar"
              name="year"
              value={fields.year}
              onChange={handleChange}
              placeholder="Year"
              required
              onClick={unflip}
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
        <fieldset id="form-cvv">
          <label>
            CVV
            <input
              type="text"
              className="cvvBar"
              name="cvv"
              value={fields.cvv}
              onChange={handleChange}
              pattern="^[0-9]{3}$"
              title="Input Numeric Values Only"
              maxLength="3"
              onClick={flip}
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
