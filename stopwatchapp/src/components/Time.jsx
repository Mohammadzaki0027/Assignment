import React from "react";

const Time = () => {
  const handlechange = (e) => {

console.log(e);
  };
  return (
    <div style={{ width: "50%", margin: "auto", textAlign: "center" }}>
      <textarea
        onChange={handlechange}

        name=""
        id=""
        cols="20"
        rows="10"
        style={{
          width: "50%",
          margin: "auto",
          textAlign: "center",
          alignContent: "middle",
        }}
      >
    00:00:00
      </textarea>
    </div>
  );
};

export default Time;
