import React from "react";
import DrinkList from "./DrinkList";

class WhatYouDrink extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drinks: [],
      text: ""
    };

    this.add = this.add.bind(this);
  }

  list() {
    console.log(event.data);
  }
  add() {
    const drinks = this.state.drinks;
    const val = document.getElementsByClassName("addDrink")[0].value;
    drinks.push(val);
    if (val) {
      this.setState({
        drinks: drinks
      });
      console.log(drinks);
    }
    // console.log(event.data);
  }

  render() {
    return (
      <div className="what-you-drink">
        <ul>
          {this.state.drinks.map((drink, inx) => {
            return <li key={inx}>{drink}</li>;
          })}
        </ul>
        <input className="addDrink" drink={this.state.drinks} type="text" />
        <button onClick={this.add}>Add</button>
        <button onClick={this.select}>Select</button>
        <DrinkList />
      </div>
    );
  }

  select() {
    console.log("select");
  }
}

export default WhatYouDrink;
