import { Component } from "react";

class Name extends Component {
  constructor(props) {
    super(props);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
  }

  handleFirstName(e) {
    this.props.handleFirstName(e);
  }

  handleLastName(e) {
    this.props.handleLastName(e);
  }

  render() {
    return (
      <div className="full-name">
        <div className="f-name">
          <label htmlFor="f-name">First Name</label>
          <input
            type="text"
            id="f-name"
            name="f-name"
            onChange={this.handleFirstName}
          ></input>
        </div>
        <div className="l-name">
          <label htmlFor="l-name">Last Name</label>
          <input
            type="text"
            id="l-name"
            name="l-name"
            onChange={this.handleLastName}
          ></input>
        </div>
      </div>
    );
  }
}

export { Name };
