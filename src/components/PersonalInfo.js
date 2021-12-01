import { Component } from "react";
import { Name } from "./Name";
import { Contact } from "./Contact";
import { Address } from "./Address";

class PersonalInfo extends Component {
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
      <div className="personal-info">
        <h2>Personal Information</h2>
        <Name
          handleFirstName={this.handleFirstName}
          handleLastName={this.handleLastName}
        />
        <Contact />
        <Address />
      </div>
    );
  }
}

export { PersonalInfo };
