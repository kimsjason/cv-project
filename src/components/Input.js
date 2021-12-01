import { Component } from "react";
import { PersonalInfo } from "./PersonalInfo";
import { Education } from "./Education";
import { WorkExperience } from "./WorkExperience";

class Input extends Component {
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
      <div className="input">
        <PersonalInfo
          handleFirstName={this.handleFirstName}
          handleLastName={this.handleLastName}
        />
        <Education />
        <WorkExperience />
      </div>
    );
  }
}

export { Input };
