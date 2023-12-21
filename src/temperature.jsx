import React from "react";
import "./Styles/temperature.css";
import Fire from "./assests/fire.svg";
import Snow from "./assests/snowflake.svg";
const temperature = () => {
  return (
    <div className="container-2">
      <h5 style={{color:"#5D5D5A",marginLeft:"1cm"}}> <b> Temperature</b></h5>
      <div className="sub-2">
        <h1 id="border-round-2"><b>21</b><span style={{fontSize:"15px",position:"relative",top:"0.8rem"}}><sup>o</sup>C</span></h1>

        <div className="values-2">

          <span>
            <img src={Fire} width={15} alt="" />
            <h2><b>26</b><span style={{fontSize:"15px"}}><sup>o</sup>C</span></h2>
          </span>
          <p id="border_line_2"></p>

          <span id='bottom-value'>
            {" "}
            <img src={Snow}width={15} alt="" />
            <h2><b>18</b><span style={{fontSize:"15px"}}><sup>o</sup>C</span></h2>
          </span>
        </div>
      </div>
    </div>
  );
};

export default temperature;
