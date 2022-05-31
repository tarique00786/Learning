import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Expand from "./Components/Expand";
import Button from "./Components/Button";
import Label from "./Components/Label";
import React from "react";
function App() {
  let textInput = React.createRef();
  const [Counter, setCounter] = useState(0);
  const [error, setError] = useState("");
  const [sum, setSum] = useState(0);
  const [inputvalue, setInputvalue] = useState("");
  const a = "increment";
  const b = "decrement";
  const c = "sum";

  // const useLabel = (value) => {
  //   const b = value;
  //   console.log(b);
  // };

  const count = (d) => {
    if (d == a) {
      setCounter(Counter + 2);
    } else if (d == b) {
      setCounter(Counter - 1);
    } else {
      const n = Number(textInput.current.value);
      console.log(typeof n);
      console.log(n > 0);
      if (n > 0) {
        setSum((n * (n + 1)) / 2);
        console.log(error);
      } else {
        setSum(0);
        setError("Enter valid input");
        console.log(error);
      }
      console.log(sum);
    }
  };
  return (
    <div>
      <div className="App1">
        <Button count={count} a={a}></Button>
        <Button count={count} a={b}></Button>
        <Label Counter={Counter} x={1}></Label>
      </div>
      <div className="App2">
        <input ref={textInput} type="text" />
        <br></br>
        <label>{error}</label>
        <Button count={count} a={c}></Button>
        <Label sum={sum}></Label>
      </div>
      <div className="App3">
        <Expand></Expand>
      </div>
    </div>
  );
}

export default App;
