import { Component } from "react";
import { Name } from "./Name";
import { Contact } from "./Contact";
import { Address } from "./Address";

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
  }

  handleFirstName(e) {
    this.props.handleFirstName(e);
  }

  handleLastName(e) {
    this.props.handleLastName(e);
  }

  handleEmail(e) {
    this.props.handleEmail(e);
  }

  handlePhone(e) {
    this.props.handlePhone(e);
  }

  render() {
    return (
      <div className="personal-info">
        <h2>Personal Information</h2>
        <Name
          handleFirstName={this.handleFirstName}
          handleLastName={this.handleLastName}
        />
        <Contact
          handleEmail={this.handleEmail}
          handlePhone={this.handlePhone}
        />
        <Address />
      </div>
    );
  }
}

export { PersonalInfo };
