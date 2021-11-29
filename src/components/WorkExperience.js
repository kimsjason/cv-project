import { Component } from "react";
import { Date } from "./Date";
import { Responsibility } from "./Responsibility";
class WorkExperience extends Component {
  render() {
    return (
      <div>
        <h2>Work Experience</h2>
        <div className="company">
          <label htmlFor="company">Company Name</label>
          <input type="text" id="company" name="company"></input>
        </div>
        <div className="job-title">
          <label htmlFor="job-title">Job Title</label>
          <input type="text" id="job-title" name="job-title"></input>
        </div>
        <div>Start Date</div>
        <Date />
        <div>End Date</div>
        <Date />
        <Responsibility />
      </div>
    );
  }
}

export { WorkExperience };
