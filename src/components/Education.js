import { Component } from "react";
import { Date } from "./Date";

class Education extends Component {
  constructor(props) {
    super(props);

    this.handleSchool = this.handleSchool.bind(this);
    this.handleDegree = this.handleDegree.bind(this);
    this.handleMonth = this.handleMonth.bind(this);
    this.handleYear = this.handleYear.bind(this);
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
      <div className="education">
        <h2>Education</h2>
        <div className="school">
          <label htmlFor="school">School</label>
          <input
            type="text"
            id="school"
            name="school"
            onChange={this.handleSchool}
          ></input>
        </div>
        <div className="degree">
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            id="degree"
            name="degree"
            onChange={this.handleDegree}
          ></input>
        </div>
        <div>Start Date</div>
        <Date handleMonth={this.handleMonth} handleYear={this.handleYear} />
        <div>End Date</div>
        <Date handleMonth={this.handleMonth} handleYear={this.handleYear} />
      </div>
    );
  }
}

export { Education };
