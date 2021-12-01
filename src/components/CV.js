import { Component } from "react";
import { Input } from "./Input";
import { Output } from "./Output";

class CV extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      street: "",
      city: "",
      state: "",
      postalCode: "",
      school: "",
      degree: "",
      month: "",
      year: "",
    };

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
    this.setState({
      firstName: e.target.value,
    });
  }

  handleLastName(e) {
    this.setState({
      lastName: e.target.value,
    });
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handlePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  handleStreet(e) {
    this.setState({
      street: e.target.value,
    });
  }

  handleCity(e) {
    this.setState({
      city: e.target.value,
    });
  }

  handleState(e) {
    this.setState({
      state: e.target.value,
    });
  }

  handlePostalCode(e) {
    this.setState({
      postalCode: e.target.value,
    });
  }

  handleSchool(e) {
    this.setState({
      school: e.target.value,
    });
  }

  handleDegree(e) {
    this.setState({
      degree: e.target.value,
    });
  }

  handleMonth(e) {
    this.setState({
      month: e.target.value,
    });
  }

  handleYear(e) {
    this.setState({
      year: e.target.value,
    });
  }

  render() {
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const email = this.state.email;
    const phone = this.state.phone;
    const street = this.state.street;
    const city = this.state.city;
    const state = this.state.state;
    const postalCode = this.state.postalCode;
    const school = this.state.school;
    const degree = this.state.degree;
    const month = this.state.month;
    const year = this.state.year;

    return (
      <div className="cv-app">
        <Input
          handleFirstName={this.handleFirstName}
          handleLastName={this.handleLastName}
          handleEmail={this.handleEmail}
          handlePhone={this.handlePhone}
          handleStreet={this.handleStreet}
          handleCity={this.handleCity}
          handleState={this.handleState}
          handlePostalCode={this.handlePostalCode}
          handleSchool={this.handleSchool}
          handleDegree={this.handleDegree}
          handleMonth={this.handleMonth}
          handleYear={this.handleYear}
        />
        <Output
          firstName={firstName}
          lastName={lastName}
          email={email}
          phone={phone}
          street={street}
          city={city}
          state={state}
          postalCode={postalCode}
          school={school}
          degree={degree}
          month={month}
          year={year}
        />
      </div>
    );
  }
}

export { CV };
