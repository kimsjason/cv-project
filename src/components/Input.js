import { Component } from "react";
import { PersonalInfo } from "./PersonalInfo";
import { Education } from "./Education";
import { WorkExperience } from "./WorkExperience";

class Input extends Component {
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
    this.handleSchool = this.handleSchool.bind(this);
    this.handleDegree = this.handleDegree.bind(this);
    this.handleMonth = this.handleMonth.bind(this);
    this.handleYear = this.handleYear.bind(this);
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

  handleSchool(e) {
    this.props.handleSchool(e);
  }

  handleDegree(e) {
    this.props.handleDegree(e);
  }

  handleMonth(e) {
    this.props.handleMonth(e);
  }

  handleYear(e) {
    this.props.handleYear(e);
  }

  render() {
    return (
      <div className="input">
        <PersonalInfo
          handleFirstName={this.handleFirstName}
          handleLastName={this.handleLastName}
          handleEmail={this.handleEmail}
          handlePhone={this.handlePhone}
          handleStreet={this.handleStreet}
          handleCity={this.handleCity}
          handleState={this.handleState}
          handlePostalCode={this.handlePostalCode}
        />
        <Education
          handleSchool={this.handleSchool}
          handleDegree={this.handleDegree}
          handleMonth={this.handleMonth}
          handleYear={this.handleYear}
        />
        <WorkExperience />
      </div>
    );
  }
}

export { Input };
