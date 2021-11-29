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
        <Name />
        <Contact />
        <Address />
      </div>
    );
  }
}

export { PersonalInfo };
