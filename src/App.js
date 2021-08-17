// import DecoratorTest from "./pages/DecoratorTest";
import React, { useState, useEffect, useRef, Suspense } from "react";
import I18next from "./pages/I18next";
import Navigator from "./pages/Navigator";
import FnComponent from "./pages/FnComponent";
import "./App.css";
import logo from "./1.jpeg";
import store from "./store";
import ReduxPage from "./pages/ReduxPage";
import Test1 from "./pages/Test";
import StyleComponent from "./pages/StyleComponent";

const ImportPage = React.lazy(() => import("./pages/ImportPage"));
// console.log("logo", logo);

class Test extends React.Component {
  render() {
    return <div>111111</div>;
  }
}
// let Component = <div>1111111</div>;
let CF = <Test></Test>;
console.log("cf", CF);
function App() {
  let [inputValue, setInputValue] = useState("");
  let [test, setTest] = useState("test");
  let [num, setNum] = useState(0);
  let testRef = useRef();
  let count = 0;
  store.subscribe(() => {
    console.log("store1111", store.getState());
  });
  useEffect(() => {
    console.log("触发了");
  }, []);
  useEffect(() => {
    console.log("ref", testRef);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setTest("change");
    }, 100);
  }, []);
  const dispatch = () => {
    setTimeout(() => {
      store.dispatch({ type: "ADD", payload: 10 });
    }, 2000);
  };
  const changeState = () => {
    count++;
    setNum(num + 1);
    console.log("count", count);
  };
  useEffect(() => {
    console.log("countuseEffect", count);
  }, [count]);
  return (
    <div className="App">
      <Suspense fallback={<div>Loading....</div>}>
        <ImportPage />
      </Suspense>
      <div style={{ height: "40px", background: "red" }}>{test}</div>
      <input value={inputValue}></input>
      <Test1 ref={testRef}></Test1>
      <img src={logo}></img>
      <I18next></I18next>
      <Navigator></Navigator>
      <FnComponent />
      {store.getState()}
      <button onClick={dispatch}>点击</button>
      <ReduxPage></ReduxPage>
      <div className="container">这是测试其他数据{count}</div>
      {num === 3 ? <StyleComponent /> : null}
      <button onClick={changeState}>点击1111</button>
    </div>
  );
}

export default App;
