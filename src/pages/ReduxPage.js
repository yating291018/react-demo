import React, { Component } from "react";
import store from "../store";
import Test from "./Test";

class componentName extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let unsubsrible = store.subscribe(() => {
      console.log("store", store.getState());
      this.forceUpdate();
    });
  }

  dispatch = () => {
    setTimeout(() => {
      store.dispatch({ type: "ADD", payload: 10 });
    }, 2000);
  };

  render() {
    return (
      <div>
        <Test></Test>
        <div>{store.getState()}</div>
        <button onClick={this.dispatch}>点击</button>
      </div>
    );
  }
}

export default componentName;
