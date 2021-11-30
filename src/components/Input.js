import { Component } from "react";
import { PersonalInfo } from "./PersonalInfo";
import { Education } from "./Education";
import { WorkExperience } from "./WorkExperience";

class Input extends Component {
  render() {
    return (
      <div className="input">
        <PersonalInfo />
        <Education />
        <WorkExperience />
      </div>
    );
  }
}

export { Input };
