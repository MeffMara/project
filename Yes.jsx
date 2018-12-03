import React from "react";
import WhatYouDrink from "./WhatYouDrink";

class Yes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>А Что ты пил?</p>
        <WhatYouDrink />
      </div>
    );
  }
}

export default Yes;
