import { Component } from "react";

class Address extends Component {
  constructor(props) {
    super(props);

    this.handleStreet = this.handleStreet.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handlePostalCode = this.handlePostalCode.bind(this);
  }

  handleStreet(e) {
    this.props.handleStreet(e);
  }

  handleCity(e) {
    this.props.handleCity(e);
  }

  handleState(e) {
    this.props.handleState(e);
  }

  handlePostalCode(e) {
    this.props.handlePostalCode(e);
  }

  render() {
    return (
      <div className="address">
        <div className="street">
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            name="street"
            onChange={this.handleStreet}
          ></input>
        </div>
        <div className="city">
          <label htmlFor="city">City/Town</label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={this.handleCity}
          ></input>
        </div>
        <div className="state">
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            onChange={this.handleState}
          ></input>
        </div>
        <div className="postal-code">
          <label htmlFor="postal-code">Postal Code</label>
          <input
            type="text"
            id="postal-code"
            name="postal-code"
            onChange={this.handlePostalCode}
          ></input>
        </div>
      </div>
    );
  }
}

export { Address };
