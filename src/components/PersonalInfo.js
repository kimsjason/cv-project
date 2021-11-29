import { Component } from "react";
import { Name } from "./Name";
import { Contact } from "./Contact";
import { Address } from "./Address";

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="personal-info">
        <h2>Personal Information</h2>
        <Name />
        <Contact />
        <Address />
      </div>
    );
  }
}

export { PersonalInfo };
