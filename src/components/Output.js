import { Component } from "react";

class Output extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    const firstName = this.props.firstName;
    const lastName = this.props.lastName;
    return (
      <div className="output">
        <div className="personal-info">
          <div className="full-name">{firstName + " " + lastName}</div>
          <div className="contact">
            Contact
            <div className="phone">Phone</div>
            <div className="email">Email</div>
          </div>

          <div className="address">
            Address
            <div className="street">Street</div>
            <div className="city">City/Town</div>
            <div className="postal-code">Postal Code</div>
          </div>
        </div>
        <div className="education">
          <div className="school">School</div>
          <div className="degree">Degree</div>
          <div className="date">Start Date</div>
          <div className="date">End Date</div>
        </div>
        <div className="work-experience">
          <div className="company">Company</div>
          <div className="job-title">Job Title</div>
          <div className="date">Start Date</div>
          <div className="date">End Date</div>
          <div className="responsibility">Description</div>
        </div>
      </div>
    );
  }
}

export { Output };
