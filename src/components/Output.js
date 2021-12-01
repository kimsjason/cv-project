import { Component } from "react";

class Output extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    const firstName = this.props.firstName;
    const lastName = this.props.lastName;
    const email = this.props.email;
    const phone = this.props.phone;
    const street = this.props.street;
    const city = this.props.city;
    const state = this.props.state;
    const postalCode = this.props.postalCode;
    const school = this.props.school;
    const degree = this.props.degree;
    const month = this.props.month;
    const year = this.props.year;

    return (
      <div className="output">
        <div className="personal-info">
          <div className="full-name">{firstName + " " + lastName}</div>
          <div className="contact">
            Contact
            <div className="phone">{phone}</div>
            <div className="email">{email}</div>
          </div>

          <div className="address">
            {street + " " + city + ", " + state + " " + postalCode}
          </div>
        </div>
        <div className="education">
          <div className="school">{school}</div>
          <div className="degree">{degree}</div>
          <div className="date">{month + " " + year}</div>
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
