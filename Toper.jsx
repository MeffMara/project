import React from "react";
import Yes from "./Yes";
import No from "./No";

class Toper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showComponentYes: false,
      showComponentNo: false,

      value: {},

      showQuestions: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.id === "yes") {
      this.setState({
        showComponentYes: true,
        showComponentNo: false
      });
    } else {
      this.setState({
        showComponentYes: false,
        showComponentNo: true
      });
    }
  }

  render() {
    return (
      <div className="question">
        <p>Ты пил сегоня?</p>
        <p>
          <input
            type="radio"
            name="troper"
            id="yes"
            value={this.state.id}
            onChange={this.handleChange}
          />
          YES
        </p>
        <p>
          <input
            type="radio"
            name="troper"
            id="no"
            value={this.state.id}
            onChange={this.handleChange}
          />
          NO
        </p>

        <div className="next">
          {this.state.showComponentYes && <Yes />}
          {this.state.showComponentNo && <No />}
        </div>
      </div>
    );
  }
}

export default Toper;
