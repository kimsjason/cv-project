import { Component } from "react";
import { Date } from "./Date";

class Education extends Component {
  render() {
    return (
      <div className="education">
        <div className="school">
          <label for="school">School</label>
          <input type="text" id="school" name="school"></input>
        </div>
        <div className="degree">
          <label for="degree">Degree</label>
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
