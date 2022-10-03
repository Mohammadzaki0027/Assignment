import React from "react";
import "./App.css";
import Stopwatch from "./components/Stopwatch";
import Time from "./components/Time";
import Timer from "./components/Timer";

function App() {
  const [tab1, setTab1] = React.useState(true);
  const [tab2, setTab2] = React.useState(false);
  const Myfun = () => {
    setTab1(true);
    setTab2(false);
  };
  const Myfun2 = () => {
    setTab1(false);
    setTab2(true);
  };
  return (
    <div className="app">
      <h1 style={{ color: "teal", textAlign: "center" }}>Stopwatch/Timer</h1>
      <div className="outerdiv">
        <div className="middle">
          <div className="tab1" onClick={Myfun}>
            Stopwatch
          </div>
          <div className="tab2" onClick={Myfun2}>
            Timer
          </div>
        </div>
        <div id="finaldiv">
          {tab1 === true && <Stopwatch></Stopwatch>}
          {tab2 === true && <Timer></Timer>}
        </div>
      </div>
<Time></Time>
    </div>
  );
}

export default App;
