import { Component } from "react";

class Responsibility extends Component {
  render() {
    return (
      <div className="responsibility">
        <label htmlFor="responsibility">Description</label>
        <textarea id="responsibility" name="responsibility"></textarea>
      </div>
    );
  }
}

export { Responsibility };
