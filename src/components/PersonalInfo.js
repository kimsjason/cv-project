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
    this.handleStreet = this.handleStreet.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handlePostalCode = this.handlePostalCode.bind(this);
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
        <Address
          handleStreet={this.handleStreet}
          handleCity={this.handleCity}
          handleState={this.handleState}
          handlePostalCode={this.handlePostalCode}
        />
      </div>
    );
  }
}

export { PersonalInfo };
