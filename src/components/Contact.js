import { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="email">
          <label for="email">Email</label>
          <input type="text" id="email" name="email"></input>
        </div>
        <div className="phone">
          <label for="phone">Phone</label>
          <input type="text" id="phone" name="phone"></input>
        </div>
      </div>
    );
  }
}

export { Contact };
