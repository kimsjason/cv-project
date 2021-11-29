import { Component } from "react";

class Address extends Component {
  render() {
    return (
      <div className="address">
        <div className="street">
          <label for="street">Street</label>
          <input type="text" id="street" name="street"></input>
        </div>
        <div className="city">
          <label for="city">City/Town</label>
          <input type="text" id="city" name="city"></input>
        </div>
        <div className="postal-code">
          <label for="postal-code">Postal Code</label>
          <input type="text" id="postal-code" name="postal-code"></input>
        </div>
      </div>
    );
  }
}

export { Address };
