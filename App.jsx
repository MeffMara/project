import React from "react";
import Header from "./Header";
import Toper from "./Toper";
import WhatYouDrink from "./WhatYouDrink";
// import Preloader from "./Preloader";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Preloader: null
    };
  }
  componentWillMount() {
    import("./Preloader").then(Preloader => {
      setTimeout(() => this.setState({ Preloader }), 1500);
    });
  }

  componentWillUnmount() {
    console.log("componentWillUnmount()");
  }
  render() {
    let { Preloader } = this.state;
    if (!Preloader) {
      return (
        <div className="lds-css ng-scope">
          <div style={{ width: 100 + "%" }} className="lds-wedges">
            <div>
              <div>
                <div />
              </div>
              <div>
                <div />
              </div>
              <div>
                <div />
              </div>
              <div>
                <div />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
    }
    return (
      <div className="my-app">
        <Header />
        <Toper />
      </div>
    );
  }
}

export default App;
