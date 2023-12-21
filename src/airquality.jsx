import React from 'react'
import './Styles/airquality.css';
import Uparrow from './assests/Vector.png'
import Downarrow from './assests/arrow-down.png'
import Axios from 'axios';
const airquality = () => {


  return (


    <div className="container-2">
    <h5 style={{color:"#5D5D5A",marginLeft:"1cm"}}> <b> Air Quality</b></h5>
    <div className="sub-2">
      <h1 id="border-round-1"><b>72</b></h1>

      <div className="values-1">

        <span>
          <img src={Uparrow} width={19} height={22} id='img-one' style={{color:"red"}} alt="" />
          <h2><b>93</b></h2>
        </span>
        <p id="border_line_2"></p>

        <span id='bottom-value-1'>
          {" "}
          <img src={Downarrow}width={25} height={25}alt="" />
          <h2><b>61</b></h2>
        </span>
      </div>
    </div>
  </div>
  )
}

export default airquality;
