import "./AboutContent.css";
import React1 from "../assets/react1.jpg"
import React2 from "../assets/react2.webp"
import React from 'react'
import { Link } from "react-router-dom";

const AboutContent=() =>{
  return (
    
    <div className="about">
        <div className="left">
          <h1>What is Our Goal?</h1>
          <p>Company Goal are to build for our customers Websites and Mobile Application that meet their needs</p>  
            <Link to="/contact">
            <button className="btn">Contact</button> 
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1}
                    className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={React2}
                    className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;
