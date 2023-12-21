import React from "react";
import "./Styles/displays.css";
const displays = () => {
  return (
    <div className="container-4">
      <h5 style={{ color: "#5D5D5A", marginLeft:"1cm" }}>
        {" "}
        <b> Displays</b>
      </h5>
      <div className="sub-4">
        <h1><b> 10</b> <span><b>/16</b></span></h1>
        <p id="border_line_4"></p>
        <div className="values-4">
         <p> On Time</p> 
         <h3><b>00:00</b></h3>
        </div>
      </div>
    </div>
  );
};

export default displays;
