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
    };

    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
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
  render() {
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const email = this.state.email;
    const phone = this.state.phone;

    return (
      <div className="cv-app">
        <Input
          handleFirstName={this.handleFirstName}
          handleLastName={this.handleLastName}
          handleEmail={this.handleEmail}
          handlePhone={this.handlePhone}
        />
        <Output
          firstName={firstName}
          lastName={lastName}
          email={email}
          phone={phone}
        />
      </div>
    );
  }
}

export { CV };
