import React from "react";

class DrinkList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.add = this.add.bind(this);
    this.minus = this.minus.bind(this);
  }

  add() {
    this.setState({
      count: this.state.count + 100
    });
  }
  minus() {
    this.setState({
      count: this.state.count - 100
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.minus} className="minus">
          -
        </button>
        <span className="count">{this.state.count}</span>
        <button onClick={this.add} className="plus">
          +
        </button>
      </div>
    );
  }
}

export default DrinkList;
