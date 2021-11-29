import { Component } from "react";
class Date extends Component {
  render() {
    const date = new Date(2021, 20, 10);
    console.log(date);
    //const currentYear = date.getFullYear();
    return (
      <div className="date">
        <div className="month">
          <label for="month"></label>
          <select id="month" name="month">
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
          <label for="year"></label>
          <input
            type="text"
            id="year"
            name="year"
            minlength="4"
            maxlength="4"
            min="1900"
            max="2021"
          ></input>
        </div>
      </div>
    );
  }
}

export { Date };