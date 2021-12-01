import { Component } from "react";
class Date extends Component {
  constructor(props) {
    super(props);
    this.handleMonth = this.handleMonth.bind(this);
    this.handleYear = this.handleYear.bind(this);
  }

  handleMonth(e) {
    this.props.handleMonth(e);
  }

  handleYear(e) {
    this.props.handleYear(e);
  }

  render() {
    return (
      <div className="date">
        <div className="month">
          <label htmlFor="month"></label>
          <select id="month" name="month" onChange={this.handleMonth}>
            <option value="">--Please select a month--</option>
            <option value="january">January</option>
            <option value="february">Feburary</option>
            <option value="march">March</option>
            <option value="april">April</option>
            <option value="may">May</option>
            <option value="june">June</option>
            <option value="july">July</option>
            <option value="august">August</option>
            <option value="september">September</option>
            <option value="october">October</option>
            <option value="november">November</option>
            <option value="december">December</option>
          </select>
        </div>
        <div className="year">
          <label htmlFor="year"></label>
          <input
            type="text"
            id="year"
            name="year"
            minLength="4"
            maxLength="4"
            min="1900"
            max="2021"
            onChange={this.handleYear}
          ></input>
        </div>
      </div>
    );
  }
}

export { Date };
