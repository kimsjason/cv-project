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
      <div className="input">
        <PersonalInfo
          handleFirstName={this.handleFirstName}
          handleLastName={this.handleLastName}
          handleEmail={this.handleEmail}
          handlePhone={this.handlePhone}
        />
        <Education />
        <WorkExperience />
      </div>
    );
  }
}

export { Input };
