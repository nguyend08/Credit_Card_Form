import React from "react";

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flipped: false,
      clicked: false
    };
  }

  flip() {
    this.setState({
      flipped: !this.state.flipped,
      clicked: true
    });
  }

  render() {
    const { fields } = this.props;
    const { flipped, clicked } = this.state;
    const flippedCSS = flipped ? "card-back-flip" : "card-front-flip";

    if (flippedCSS === "card-front-flip") {
      return (
        <div class="cardContainer">
          <div class="card">
            <div class={`front-card ${flippedCSS}`}>
              <fieldset id="card-chip">
                <img
                  src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
                  className="chip"
                />
              </fieldset>
              <fieldset id="card-type">
                <img
                  src="https://bestofcategoryreviews.com/wp-content/uploads/2016/01/Visa-symbol.jpg"
                  className="type"
                />
              </fieldset>
              <fieldset id="card-number">
                <div className="number">{fields.number}</div>
              </fieldset>
              <fieldset id="card-holder">
                <div class='info'>Card Holder</div>
                <div className="holder">{fields.name}</div>
              </fieldset>
              <fieldset id="card-expires">
                <div class='info'>Expires</div>
                <div className="expires">
                  {fields.month}/{fields.year}
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div class="cardContainer">
          <div class="card">
            <div class={`back-card ${flippedCSS}`}>
              <fieldset id="bar-back">
                <div class="bar"></div>
              </fieldset>
              <fieldset id="cvv-back">
                <div class="cvv-back-title info">CVV</div>
                <div class="cvv-back-input-box">{fields.cvv}</div>
              </fieldset>
              <fieldset id="card-type">
                <img
                  src="https://bestofcategoryreviews.com/wp-content/uploads/2016/01/Visa-symbol.jpg"
                  className="type"
                />
              </fieldset>
            </div>
          </div>
        </div>
      );
    }
  }
}
