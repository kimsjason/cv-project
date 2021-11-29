import { Component } from "react";
import { Date } from "./Date";

class Education extends Component {
  render() {
    return (
      <div className="education">
        <h2>Education</h2>
        <div className="school">
          <label htmlFor="school">School</label>
          <input type="text" id="school" name="school"></input>
        </div>
        <div className="degree">
          <label htmlFor="degree">Degree</label>
          <input type="text" id="degree" name="degree"></input>
        </div>
        <div>Start Date</div>
        <Date />
        <div>End Date</div>
        <Date />
      </div>
    );
  }
}

export { Education };
