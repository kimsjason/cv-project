import { Component } from "react";

class Name extends Component {
  render() {
    return (
      <div className="full-name">
        <div className="f-name">
          <label htmlFor="f-name">First Name</label>
          <input type="text" id="f-name" name="f-name"></input>
        </div>
        <div className="l-name">
          <label htmlFor="l-name">Last Name</label>
          <input type="text" id="l-name" name="l-name"></input>
        </div>
      </div>
    );
  }
}

export { Name };
