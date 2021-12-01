import { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
  }

  handleEmail(e) {
    this.props.handleEmail(e);
  }

  handlePhone(e) {
    this.props.handlePhone(e);
  }

  render() {
    return (
      <div className="contact">
        <div className="phone">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={this.handlePhone}
          ></input>
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={this.handleEmail}
          ></input>
        </div>
      </div>
    );
  }
}

export { Contact };
