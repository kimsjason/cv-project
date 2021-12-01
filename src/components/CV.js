import { Component } from "react";
import { Input } from "./Input";
import { Output } from "./Output";

class CV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
    };
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
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

  render() {
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    return (
      <div className="cv-app">
        <Input
          handleFirstName={this.handleFirstName}
          handleLastName={this.handleLastName}
        />
        <Output firstName={firstName} lastName={lastName} />
      </div>
    );
  }
}

export { CV };
