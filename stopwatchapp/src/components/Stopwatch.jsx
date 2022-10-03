import React, { useRef } from "react";
import Styles from "./stop.modules.css";

const Stopwatch = () => {
  const [value, setValue] = React.useState(0);
  const timeRef = useRef(null);
  const handlestart = () => {
    if (timeRef.current) {
      return;
    }
    timeRef.current = setInterval(() => {
      setValue((prev) => prev + 10);
    }, 10);
  };
  const handlestop = () => {
    if (timeRef.current) {
      clearInterval(timeRef.current);
      timeRef.current = null;
    }
  };
  const handlereset = () => {
    handlestop();
    setValue(0);
  };

  return (
    <div id="outerdiv">
      Stopwatch
      <div id="stop">
        <div className="spandiv" onClick={handlestop}>
          <span className="spanclass">
            {("0" + Math.floor((value / 60000) % 60)).slice(-2)}:
          </span>
          <span className="spanclass">
     {Math.floor((value / 1000) % 60)<10?"0"+Math.floor((value / 1000) % 60):Math.floor((value / 1000) % 60)}:
          </span>
          <span className="spanclass">
         
            {value<10?"0"+((value / 10) % 100):((value / 10) % 100)}
          </span>
        </div>

        <button className="btn" onClick={handlestart}>
          Start
        </button>
        <button className="btn" onClick={handlestop}>
          Stop
        </button>
        <button className="btn" onClick={handlereset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
